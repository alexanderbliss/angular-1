var myApp = angular.module('myApp', [])

myApp.controller('GuessWhoController', function () {

    var guess = this;
    guess.message = 'working';
    guess.new = function () {
        console.log('here', guess.name);
        var newOb = { name: guess.name, github: guess.git }
        people.push(newOb);
    }

    // guess.show = function (person) {
    //     console.log(person);

    //     guess.message = person.name + '!'
    // }

    guess.appear = function(){
        person.appear = !person.show
        

    }

    guess.random = function (person) {
        var rand = people[Math.floor(Math.random() * people.length)];
        guess.message = rand.name
        if (rand.name === people){
            alert('you guessed correctly')
        }else{
            alert('try again')
        }
        

    }
    var people = [{ name: 'Alex', github: 'alexanderbliss', appear:true },
    { name: 'Blaze', github: 'sarahHarrington' , appear: true },
    { name: 'Sarah', github: 'Blaze90809', appear: true },
    { name: 'Holly', github: 'hollytuhake', appear: true }
    ]
    console.log(people);
    guess.random()
    guess.people = people




})