function onRun(context) {
  var nativeDoc = NSDocumentController.sharedDocumentController().currentDocument();
  var sketch = context.api();
  var document = sketch.selectedDocument;
  var originalLayer;

  if (document.selectedLayers.length === 1) {
    document.selectedLayers.iterate(function(layer) {
      originalLayer = layer;
    });

    if (originalLayer) {
      [NSApp sendAction:'paste:' to:nil from:nativeDoc];

      if (document.selectedLayers.length === 1) {
        document.selectedLayers.iterate(function(layer) {
          layer.frame = originalLayer.frame;

          originalLayer.remove();
        });
      }
    }
  }
};
