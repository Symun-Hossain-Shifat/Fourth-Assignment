1. What is the difference between getElementById, getElementsByClassName, and   / querySelectorAll?
Answer:  getElementById is used for select a element uniquely from html in js .At the same process getElementsByClassName used for select elements
from html by using class name  , querySelector used for select the first element of the same category elements from html in js.finally querySelectorAll
used  for select the all same categories elements from html .

2. How do you create and insert a new element into the DOM?
Answer: I can create a new element into DOM by using CreateElement property. and insert them into DOM by using AppendChild property.

3. What is Event Bubbling? And how does it work?
Answer:  Event Bubbling is a part of Event propagation process in js. when we click a element, this time event propagan from children to parent element .
It is the main work of Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation means in js that , click on parent and by using  Event Delegation we set which children will be clicked .
It has some Usefullness .
   1.NO need to use EventListener for control children element
   2.Element that are added DOM are atomatically Handled
   
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() is used for stop the Default work of a element and stopPropagation() is used for stop the Event Bubbling in Eventhandler
