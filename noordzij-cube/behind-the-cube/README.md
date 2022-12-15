# Behind the cube

Much has been said about the Noordzij cube. Yet, often you only see its front and lefthand outermost layers. This representation can be quite difficult to wrap your head around, when you first encounter the Noordzij cube. In fact, only 61 e’s are visible in its [standard representation](https://www.uitgeverijdebuitenkant.nl/beheer/upload/202112241127420.niew.jpg) when it as 125 e’s in total. Which is quite a challenge, when explaining the cube to students. So this is the endeavour to build it in 3D. To find a way to show the other 64 e’s. To use it in the browser. As I mentioned, there are many folks around that will be able to tell you much more about this artifact than I can do. 

So this short test will take you into the making of this online cube and hopefully inspire you to play around with it — but not only the cube, but also the tools used to produce it.

I will take you into the workshop of making this. From drawing the font to putting it online. So let’s get started:

## Drawing a font (+ deviation into higher order interpolation) 

![A window of the font editor Glyphs with a lowercase e, drawn with translation contrast](https://user-images.githubusercontent.com/49315922/207306459-c03ba03b-a253-4639-bd92-47f2b1edf2ff.png)
Drawing the font was pretty straight forward. I examined some source Material — some Noordzij drawing, some covers of »The Stroke«, etc. — and drew the extremes. Yet, when interpolating these extremes, the tail of the e closes quite unpleasently. 
![A window of FontGoggles showing a wabbly tail of a lowercase e.](./img/linear-interpolation.png)

Enter: higher order interpolation or HOI in short. What this allows me to do: tame the tail of the e by defining not only its anchor points but also their movement. This also comes with a little tradeoff of having to introduce two new axes which help me to control the swing of the e’s tail. The glyphs files are available [here](../source-files) for you to take a look, if you are interested in the concept.

![A window of FontGoggles showing a lowercase e. Two construction helper axes allow to control the tail of the e.](./img/hoi.png)

If you want to learn more about the concept of higher order interpolation visit [Underware’s case study](https://underware.nl/case-studies/hoi/) or also Stephen Nixon’s [Higher Order Interpolation experiments](https://github.com/arrowtype/NLI-test).



## Setting up the cube in Blender (+ ST2)

Using variable fonts in 3D software can be tedious. Luckily, there’s a little Blender plugin which comes to our help [ST2 (formerly Coldtype)](https://github.com/coldtype/st2) by Rob Stenson. This Plugin made using the font in Blender smooth and easy. The cube was quickly constructed and all I had to do was to iterate through my axes and set every e to its position both in 3D space and in its design space — albeit here both are the same…
The Blender files can be found in [this repository](../source-files) as well. Feel free to play around with them.

![A window of Blender showing a cube constructed of lowercase e’s in different constructions following the example of the Noordzij cube.](./img/blender.png)
The last thing in this step was preparing the 3D file to work on the web. All I had to do was to export the cube as glTF to work in the browser.



## Preparing the web framework (+ Babylon JS)

Working with 3D files on the web has become increasingly less barrier burden in recent years. For the Noordzij cube I made use of of the [Babylon.js](https://github.com/BabylonJS/Babylon.js) framework to take care of the rendering of the 3D files. This process was pretty much plug and play: Take the 3D file and plug it into the framework to distribute it via the browser. 

Some UI to control both camera angles and the cube was added as well. This step seemed necessary to make full use of the cube: to rotate the e’s so that you could see them always facing you and see both the changes in weight and contrast. Toggling layers seemed to make sense as well to better orientate yourself in 3D space. But go and [have a look at the 3D cube!](https://haw-type-design.github.io/noordzij-cube/)

![A browser window showing the 3D Noordzij cube from the top left corner. The e’s are coloured from orange to blue.](./img/web-cube.png)



## What’s next? (+ How you can play with this)

Personally, the web cube is already helping us at HAW to better teach the Noordzij cube to students and help them understand the idea of a design space (most literally). However, we are very much interested what this will lead to: what happens if you plug in your own font? Play around with the files? We’re curious about your feedback so please hit us up to [let us know what you think](mailto:simon.thiefes@haw-hamburg.de?subject=Noordzij Cube&cc=pierre.pane-farre@haw-hamburg.de")!

The repository for the cube can be found [here](https://github.com/haw-type-design/haw-type-design.github.io/tree/main/noordzij-cube) please mess around with it and share your results!

---

> ### About
>
> The idea for the cube arose from a discussion between me (Simon Thiefes) and Prof. Pierre Pané-Farré at the HAW Hamburg/Finkenau, when reflecting about how to present and teach the cube to students. We thought it to be necessary to see the back side of the cube, to be able to see it from all sides and move around in a 3D space. Following this discussion in a ping-pong we further developed our first drafts, and I progressively improved my first code sketches. <br>If you find bugs, please report them via GitHub, so we can fix them.
