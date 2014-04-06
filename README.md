# scissor   [![Build Status](https://travis-ci.org/chetandhembre/scissor.svg?branch=master)](https://travis-ci.org/chetandhembre/scissor)

[![NPM](https://nodei.co/npm/scissor.png?downloads=true&stars=true)](https://nodei.co/npm/kue/)

many time we  want to split large string into small chunk of string with some limit of lenght of every string. But gotcha here is while spliting large string we should not split word because we do then we will destory meaning of word. this module will help you to handle those cases

## Features
  - Avoid splitting word
  - split string according to delimiter
    - we are using following delimiters
        - .
        - ,
        - ;
        - )
        - ?
        - !
        - space
        - %
        - :
        - &
  - If we unable split string without breaking word then we split word but we will add ``-`` to show word has been split
  



## Installation

``npm install scissor``

## Test

``npm test``

# API
You can call ``split(string, maxlenght)`` it will return array of string 
  
  
# Example

      var scissor =  require('scissor');
      scissor.split('demo', 5)   //output ['demo']
      scissor.split('Lorem Ipsum', 7)   //output ['Lorem', 'Ipsum']
      scissor.split('Lorem.Ipsum', 7)   //output ['Lorem.', 'Ipsum']
      scissor.split('Lorem.. Ipsum', 8)   //output ['Lorem..', 'Ipsum']
      scissor.split('demo Lorem..Ipsum!! demo', 5)   //output [ 'demo', 'Lore-', '-m..', 'Ipsu-', '-m!!', 'demo' ]


# Contribution
if you want new feature please send pull request, or facing issue please open new issue
    
## License 

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  





