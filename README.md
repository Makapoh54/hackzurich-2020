# Circuit AI 

AI powered circuit recognizer application. 

### Tech stack

#### Backend

- YoLoV3
  - python 3.7.9
  - [ImageAI](https://github.com/OlafenwaMoses/ImageAIDocumentation) for YoLoV3 models
- RetinaNet
  - [Google Colab](https://colab.research.google.com) - used this workflow - https://colab.research.google.com/drive/1v3nzYh32q2rm7aqOaUDvqZVUmShicAsT#scrollTo=I_AoWG4lHFME

#### Client

- React
- GoJS

We started our work with exploring computer vision. At first - we looked at ImageAI library which is high-level wrapper of Tensorflow. We used YoLoV3 model, as this model provided custom training ability only for it.

As test data we used provided images, as well as rotated, scaled & blurred copies. Annotation tool - https://www.makesense.ai/

At first we tried to run training locally, but preformant training on CUDA cores didn't worked on any of our local machines, so we executed trainig for 12 hours on CPU.

Results below:

![](https://github.com/Makapoh54/hackzurich-2020/blob/master/assets/ex0_pic-detected.jpg)
![](https://github.com/Makapoh54/hackzurich-2020/blob/master/assets/ex0-detected.jpg)
![](https://github.com/Makapoh54/hackzurich-2020/blob/master/assets/ex1_pic-detected.jpg)
![](https://github.com/Makapoh54/hackzurich-2020/blob/master/assets/ex4-detected.jpg)


Results were not quite satisfying, so we decided to move into cloud - Google Colab, which provides GPU computing. We decided to change model from YoLo to RetinaNet, as its description stated it is more accurate, but a bit slower.

However, we encountered a problem of small dataset. Seemed like retina requires significantly larger dataset. We managed to train it, but the results were worse than in our locally trained YoLo version.

The results of trained models (both YoLo and RetinaNet) were unstable and inaccurate, so we switched to OpenCV patern recognition and custom solution.

# Siemens automation circuit recognizer
Special cirtuit recognizer, made for HackZurich 2020, Siemens "Graph the Building" challenge

Honors go to @mahmut-aksakallli for his image recognition studies, which this recognizer is founded on.

## How it works
1) Using block adjacency graph potential components are segmented
2) Components are identified using contour based classification. Classification is done using support vector machine which is trained with HOG descriptors
3) Potential lines are detected using line segment detector algorithm
4) Components and lines are merged into common graph based on connecting coordinates
