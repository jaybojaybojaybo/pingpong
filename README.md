# _PingPong_

#### _PingPong webpage - replace integers with phrases depending on certain rules, 2017 March 10_

#### By _**Jasun Feddema**_

## Specifications

* _It can count up to the provided number:_
  * Example Input: 3
  * Example Output: [1,2,3]
* _It can recognize numbers divisible by 3 and 5 up to the provided number, and replace with "pingpong"_
  * Example Input: 15
  * Example Output: [1...13,14,pingpong]
* _It can recognize numbers divisible by 3 up to the provided number and replace with "ping"_
  * Example Input: 5
  * Example Output: [1,2,ping,4,5]
* _It can recognize numbers divisible by 5 up to the provided number and replace with "pong"_
  * Example Input: 5
  * Example Output: [1,2,3,4,pong]
* _It can recognize numbers divisible by 3, numbers divisible by 5, and divisible by 3 and 5 (up to the provided number) - and replace each with "ping", "pong", and "pingpong" respectively._
  * Example Input: 15
  * Example Output: [1,2,ping,4,pong,ping....13,14,pingpong]
* _It can display the output in an unordered list._
  * Example Input: 3
  * Example Output:
    * 1
    * 2
    * ping

## Setup/Installation Requirements

* _Clone github repository to your desktop_
* _open index.html in browser of choice_
* _enter a number and see what happens!_

## Known Bugs

_As far as I can tell, the syntax for preventDefault is correct.  But I can't get it to behave correctly.  Instead of the previous array being replaced by a new array, the new array is appended after the previous array._

## Support and contact details

_jasun.feddema@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Atom_
* _Google Chrome Console_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Jasun Feddema_**
