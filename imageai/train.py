from imageai.Detection.Custom import DetectionModelTrainer

trainer = DetectionModelTrainer()
trainer.setModelTypeAsYOLOv3()
trainer.setDataDirectory(data_directory="symbols")
trainer.setTrainConfig(object_names_array=["cns", "crossing", "gen", "hexg1", "hexg2", "hyds", "junction", "mxv1", "mxv2", "pipe", "psen", "pu", "stk", "tmon", "tsen", "vflmon", "vflsen", "vlv"], batch_size=4, num_experiments=100)
trainer.trainModel()