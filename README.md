# RForms - RDF FORMS

RDF Forms is a javascript library that provides a way to declarative describe how editors and presentation views of RDF should look like. The configuration mechanism elliminates the need for programming once the library has been deployed into an environment. The RDF/JSON format is supported natively in the client.

RForms was previously known as SHAME.

# Installation

Before you can run any of the samples you have to make sure you have downloaded and build dojo. Simply run:

``lib/INSTALL-dojo.sh``

If you want to run any of the built versions, i.e. versions that load RForms as a single minified file, you need to build RForms first, this is done by:

``build/build.sh``

NOTE: You have to either access rforms via a webserver or follow the DEVELOPMENT instructions below for running the samples. To clarify even further, accessing "file:///path_to_rforms_trunk/samples/some_example.html" is not possible unless of course you have followed the instructions under DEVELOPMENT. The reason is simply that the framework that RForms relies on loads files via XHR requests, which is not allowed by default over file:///.

# Development

It is recommended to experiment directly with non-built versions as it gives you very good debugging and inspection tools to understand what is going on (especially firebug in firefox and the built in debugging tools in Chrome). Furthermore, you do not have to deploy the rforms library on a web server, you can point your browser to the sample directory using file: address, for instance file:///path_to_rforms_trunk/samples/editorView.html But due to the ajax approach for loading dependencies you first have to allow your browser to do ajax request from a file url, in Firefox this is done by:

1. Going into the config mode by typing about:config in the location bar
2. Searching for and changing the security.fileuri.strict_origin_policy to false

In Chrome this is done by starting the browser with the following flag: --allow-file-access-from-files
