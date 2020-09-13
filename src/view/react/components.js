import React, { useState, useEffect } from 'react';
import renderingContext from '../renderingContext';
import './labels';
import './text';
import './textEditors';
import './choice';
import './choiceEditors';
import './buttons';
import './date';
import './duration';
import '../bootstrap/auto';


/**
 * Utility to toggle a set of classes potentially separated by spaces in a set.
 */
const toggleClass = (clsSet, clsStr, addOrNot) => {
  let change = false;
  clsStr.split(' ').forEach((cls) => {
    if (addOrNot) {
      if (!clsSet.has(cls)) {
        clsSet.add(cls);
        change = true;
      }
    } else {
      if (clsSet.has(cls)) {
        clsSet.delete(cls);
        change = true;
      }
    }
  });
  return change;
};

// Utility to see if selector is among the classes
const selectorInClasses = (selector, clsSet) => clsSet.has(selector.substr(1));
// Utility to find struct in children based on selector
const findStruct = (selector, children) =>
  children.find(comp => comp.component && comp.domQuery(selector) !== undefined);

// Trivial utility to update an object and return it
const updateObjAttr = (obj, attr, value) => {
  if (value) {
    obj[attr] = value;
  } else {
    delete obj[attr];
  }
  return obj;
};

let structId = 0;

/**
 * A struct must be allowed to be created, modified and allow new substructures to be added both before and
 * after rendered by react. This is the reason for methods being declared first and later being overridden
 * in the useEffect call in the component method with empty array of dependencies
 * (i.e. it is only being called first time).
 * Note that all update of state variables are done by replacing the value (even for arrays and sets) to allow
 * correct diffing of react.
 */
const newStruct = (Tag, parent) => {
  const firstClsSet = new Set();
  const firstChildArr = [];
  let firstTextStr;
  const firstAttrs = {};
  structId += 1;
  const ext = {
    id: `struct_${structId}`,
    parent,
    // -- START: Initial methods used before react kicks in.
    toggleClass: (clsStr, addOrNot) => toggleClass(firstClsSet, clsStr, addOrNot),
    domQuery: selector => (selectorInClasses(selector, firstClsSet) ? ext : findStruct(selector, firstChildArr)),
    appendChild: struct => firstChildArr.push(struct),
    appendAfter: (struct, sibling) => firstChildArr.splice(firstChildArr.indexOf(sibling) + 1, 0, struct),
    text: (str) => {
      firstTextStr = str;
    },
    attr: (attr, value) => updateObjAttr(firstAttrs, attr, value),
    // -- END
    // Utility method, always works
    destroy: () => ext.parent.removeChild(ext),
    component: () => {
      const [clsSet, setCls] = useState(firstClsSet);
      const [childArr, setChildArr] = useState(firstChildArr);
      const [text, setText] = useState(firstTextStr);
      // eslint-disable-next-line no-unused-vars
      const [attrs, setAttrs] = useState(firstAttrs);

      // -- START: Override with react hook friendly methods that utilizes the current state and set methods.
      ext.domQuery = selector => (selectorInClasses(selector, clsSet) ? ext : findStruct(selector, childArr));
      useEffect(() => {
        ext.toggleClass = (clsStr, addOrNot) => {
          setCls((oldClsSet) => {
            const newClsSet = new Set(oldClsSet);
            if (toggleClass(newClsSet, clsStr, addOrNot)) {
              return newClsSet;
            }
            return oldClsSet;
          });
        };
        ext.appendChild = (struct) => {
          setChildArr(oldChildArr => oldChildArr.concat([struct]));
        };
        ext.appendAfter = (struct, sibling) => {
          setChildArr((oldChildArr) => {
            const newChildArr = oldChildArr.slice(0);
            newChildArr.splice(sibling ? newChildArr.indexOf(sibling) + 1 || 0 : 0, 0, struct);
            return newChildArr;
          });
        };
        ext.text = str => setText(str);
        ext.removeChild = (struct) => {
          setChildArr((oldChildArr) => {
            const newChildArr = oldChildArr.slice(0);
            newChildArr.splice(newChildArr.indexOf(struct), 1);
            return newChildArr;
          });
        };
        ext.attr = (attr, value) => {
          setAttrs(oldAttrs => updateObjAttr(Object.assign({}, oldAttrs), attr, value));
        };
      }, []);
      return <Tag className={clsSet.join(' ')}>{childArr.map(child =>
        (child.component ? React.createElement(child.component, { key: child.id }) : child))}{text}</Tag>;
    },
  };

  return ext;
};

renderingContext.domQuery = (selector, struct) => struct.domQuery(selector);

renderingContext.domCreate = (nodeStr, parentStruct) => {
  const struct = newStruct(nodeStr, parentStruct);
  parentStruct.appendChild(struct);
  return struct;
};

renderingContext.domCreateAfter = (nodeStr, siblingStruct) => {
  if (siblingStruct.parent) {
    const struct = newStruct(nodeStr, siblingStruct.parent);
    siblingStruct.parent.appendAfter(struct, siblingStruct);
    return struct;
  }
  return undefined;
};

renderingContext.domSetAttr = (struct, attr, value) => struct.attr(attr, value);

renderingContext.domText = (struct, text) => struct.text(text);

renderingContext.domClassToggle = (struct, classStr, addOrRemove = true) => struct.toggleClass(classStr, addOrRemove);

/**
 * Create a struct rather than a domNode.
 * @param srcNodeRef - can be a struct, a string or a dom node.
 */
renderingContext.createDomNode = (srcNodeRef /* , view */) => {
  let domNode;
  if (srcNodeRef?.component) {
    return srcNodeRef;
  } else if (srcNodeRef instanceof Node) {
    domNode = srcNodeRef;
  } else if (typeof srcNodeRef === 'string') {
    domNode = document.getElementById(srcNodeRef);
  } else {
    domNode = newStruct('div');
  }
  return newStruct('div', domNode);
};

/**
 * If we are in a toplevel struct, destroy it otherwise just call destroy on the struct.
 * @param struct
 */
renderingContext.destroyDomNode = (struct /* , view */) => {
  if (struct.component) {
    struct.destroy();
  }
};


renderingContext.prePresenterViewRenderer = () => {};

renderingContext.materialVariant = 'filled';

renderingContext.preEditorRenderer = (fieldDiv, binding, context) => {
  if (binding.getItem().getType() !== 'group' && context.noCardinalityButtons !== true) {
    context.controlDiv = newStruct('div', fieldDiv);
    renderingContext.domClassToggle(context.controlDiv, 'rdformsFieldControl');
    // eslint-disable-next-line no-unused-vars
    const RemoveButton = renderingContext.addRemoveButton(fieldDiv, binding, context);
    context.controlDiv.appendChild(<RemoveButton key={`${binding.getHash()}_removeButton`}></RemoveButton>);
  }
};

renderingContext.postEditorRenderer = (fieldDiv, binding, context) => {
  if (context.controlDiv) {
    fieldDiv.appendChild(context.controlDiv);
  }
};
