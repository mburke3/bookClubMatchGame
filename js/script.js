$(document).ready(function() {
  // npc info will all be in place beforehand
  var memberRankings =  [,,,,];
  var npcsThisRound = [];
  var npcs = [
   {
      'creator': 'Maddie',
      'name':'Jordan',
      'desc':'From Tartu/ Hobbyist beekeeper/ Bikes everywhere, but only makes right turns',
      'prefs':[2,3,1,4,0,5],
      'pic': 'images/jordan.png' //or implement images by having file name match their name  
    },
    {
      'creator': 'Maddie',
      'name':'Sam',
      'desc':'College volleyball coach/ Likes to make lentil soup/ Only wears open toed shoes',
      'prefs':[1,5,4,0,2,3],
      'pic': 'images/sam.png'
    },
    {
      'creator': 'Maddie',
      'name':'Avery',
      'desc':'Believes in vampires/ Likes sledding/ Only writes in cursive',
      'prefs':[3,2,0,5,4,1],
      'pic': 'images/avery.png'
    },
    {
      'creator': 'Maddie',
      'name':'Frankie',
      'desc':'Knows how to use power tools/ Works at an aquarium/ Slam poet',
      'prefs':[4,0,2,1,5,3],
      'pic': 'images/frankie.png'
    },
    {
      'creator': 'Maddie',
      'name':'Jay',
      'desc':'Lives in a lighthouse/ Listens only to show tunes/ Collects rocks',
      'prefs':[5,4,2,1,3,0],
      'pic': 'images/jay.png'
    },
    {
      'creator': 'Maddie',
      'name':'Taylor',
      'desc':'Plays harmonica/ Keeps loose change in Ziploc bags/ Loves crosswords',
      'prefs':[4,0,5,2,1,3],
      'pic': 'images/taylor.png'
    },
    {
      'creator': 'Ingrid',
      'name':'Alex',
      'desc':'Doesn\'t let ethics get in the way of making money/ Opinionated & out-going/ Has a large (if niche) following of adoring fans',
      'prefs':[2,3,1,4,0,5],
      'pic': 'images/alex.png' 
    },
    {
      'creator': 'Ingrid',
      'name':'Ashley',
      'desc':'Warm, bright, and thoughtful/ Attends Carnegie Mellon/ As addept at the theatre stage as she is around a computer\'s motherboard',
      'prefs':[1,5,4,0,2,3],
      'pic': 'images/ashley.png'
    },
    {
      'creator': 'Ingrid',
      'name':'Yennifer',
      'desc':'Strong, opinionated, and passionate/ Never forgets to charge her crystals in the full moon/ Don\'t get on her bad side',
      'prefs':[3,2,0,5,4,1],
      'pic': 'images/yennifer.png'
    },
    {
      'creator': 'Ingrid',
      'name':'Finley',
      'desc':'Sweet, reliable, and sometimes clumsy/ A loyal companion/ Love nothing more than to curl up on the couch for some Netflix and popcorn',
      'prefs':[4,0,2,1,5,3],
      'pic': 'images/finley.png'
    },
    {
      'creator': 'Ingrid',
      'name':'Charlie',
      'desc':'Really into politics, activism, and fighting for te little guys/ Often found volunteering at the ACLU and mentoring at the YMCA/ Loves nothing more than a night of drinks and active debate about the latest headlines',
      'prefs':[5,4,2,1,3,0],
      'pic': 'images/charlie.png'
    },
    {
      'creator': 'Ingrid',
      'name':'Jo',
      'desc':'Accomplished athlete, World traveler, and music lover/ As comfortable lounging on a beach in the Mediterranen as listening to an opera at the Met',
      'prefs':[4,0,5,2,1,3],
      'pic': 'images/jo.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 1',
      'desc':'17 years old/ 4th ranked Chess player on his high school team/ Wears glasses but doesn\'t need them/ Has a pet snake (afraid of dogs and cats)',
      'prefs':[2,3,1,4,0,5],
      'pic': 'images/char1.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 2',
      'desc':'19 years old/ Goes to private school; repeated sophomore year to play football/ Likes classical music/ Vegetarian',
      'prefs':[1,5,4,0,2,3],
      'pic': 'images/char2.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 3',
      'desc':'47 years old/ College professor teaching classes in animals\' rights and welfare/ Allergic to dairy/ Self-sorted into Gryffindor (although she has never taken a sorting quiz)',
      'prefs':[3,2,0,5,4,1],
      'pic': 'images/char3.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 4',
      'desc':'26 years old/ Does yoga every morning at the local community center/ Studied abroad in Paris her sophomore year of college and still considers it to be the high point of her life/ Is really a Taurus, but identifies more closely with being a Gemini',
      'prefs':[4,0,2,1,5,3],
      'pic': 'images/char4.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 5',
      'desc':'73 years old/ Got a Ph.D in chemistry/ Retired in 2015, but came back to the field to consult for the Covid-19 vaccine/ Still best friends with the girl she met on her first day of Chem 101',
      'prefs':[5,4,2,1,3,0],
      'pic': 'images/char5.png'
    },
    {
      'creator': 'Rachel',
      'name':'Character 6',
      'desc':'33 years old/ President of the fraternity "Chi Phi" for 3 years/ Favorite movie is Wolf of Wall Street (Jordan Belfort is his role model)/ Lives in Queens but tells anyone who asks that he lives in Midtown',
      'prefs':[4,0,5,2,1,3],
      'pic': 'images/char6.png'
    },
    {
      'creator': 'Chris',
      'name':'Tripper Harrison',
      'desc':'29 years old/ Director of Camp North Star/ Quote: Attention. Here\'s an update on tonight\'s dinner. It was veal. The winner of tonight\'s mystery meat contest is Jeffrey Corbin who guessed "some kind of beef"',
      'prefs':[1,5,0,2,4,3],
      'pic': 'images/tripper.png'
    },
    {
      'creator': 'Chris',
      'name':'David Lightman',
      'desc':'18 yers old/ High school student and hacker/ Quote: What he did was great! He designed his computer so that it could learn from its own mistakes. So they\'d be better te next time they played. The system actually learned how to learn. It could teach itself!',
      'prefs':[2,0,1,5,3,4],
      'pic': 'images/david.png'
     },
     {
       'creator': 'Chris',
       'name':'Chris Knight',
       'desc':'22 years old/ Physics major at CalTech/ Quote: Would you be prepared if gravity reversed itself? The only thing I can\'t figure out is how to keep the change in my pockets. I\'ve got it. Nudity',
       'prefs':[5,1,2,0,3,4],
       'pic': 'images/chris.png'
     },
     {
       'creator': 'Chris',
       'name':'Alison Bradbury',
       'desc':'19 years old/ Aspiring classics professor at NE College/ Quote: Spontaniety has its time and place. [checking her calendar] Ler\'s see, Friday. 5:30, dinner. 6:00, Calculus. 7:00, news. 7:30, shower. 7:45, phone call. Eight o\'clock? ',
       'prefs':[4,3,5,0,2,1],
       'pic': 'images/alison.png'
     },
     {
       'creator': 'Chris',
       'name':'Kat Stratford',
       'desc':'18 years old. High School Student and Badass/ Quote: Romantic? Hemingway? He was an abusive, alcoholic misogynist who squandered half his life hanging around Picasso trying to nail his leftovers. What is it, Asshole Day?',
       'prefs':[3,4,2,0,1,5],
       'pic': 'images/kat.png'
     },
     {
       'creator': 'Chris',
       'name':'Kim',
       'desc':'18 years old/ High School Student and Badass/ Quote: [praying] Dear God, please stop me perving over Sugar and help me find a fit guy to perv over instead. Or if it turns out you\'re OK with the whole same-sex thing, then stop Sugar messing me about and help her find her way  into my bed',
       'prefs':[0,1,5,2,4,3],
       'pic': 'images/kim.png'
     },
     {
       'creator': 'Brian',
       'name':'Lisa',
       'desc':'Just passed the bar exam/ Smart and goal-oriented/ Passionate about social issues (e.g. climate, animal rights, inequality, etc.)/ Somewhat of a social misfit',
       'prefs':[2,3,0,5,1,4],
       'pic': 'images/lisa.png'
     },
     {
       'creator': 'Brian',
       'name':'Bart',
       'desc':'Uber driver/ Trump voter/ Self obsessed; limited view of world issues/ Rebellious; generally distrustful of government',
       'prefs':[5,1,0,4,2,3],
       'pic': 'images/bart.png'
     },
     {
       'creator': 'Brian',
       'name':'Marge',
       'desc':'Animal shelter manager/ Kind and compassionate/ Tends to "go along with the crown" ven if it may not be in her best interests/ Looking for more adventure and excitement in her life',
       'prefs':[3,2,5,4,0,1],
       'pic': 'images/marge.png'
     },
     {
       'creator': 'Brian',
       'name':'Waylon',
       'desc':'Very organized and enjoys helping others/ High emotional IQ/ Shy and timid in social settings/ Looking for stability and commitment in a relationship',
       'prefs':[5,0,4,2,1,3],
       'pic': 'images/waylon.png'
     },
     {
       'creator': 'Brian',
       'name':'Rory',
       'desc':'Always joking around; takes few things seriously/ Comes across as fun and entertaining in short encounters, but at other times is mody and mysterious/ Has few friends that know him "well"',
       'prefs':[3,5,2,0,4,1],
       'pic': 'images/rory.png'
     },
     {
       'creator': 'Brian',
       'name':'Willie',
       'desc':'Scottish immigrant/ Owns lawn and landscaping business/ Fitness buff and outdoor enthusiast/ Confident and opinionated',
       'prefs':[4,0,2,1,3,5],
       'pic': 'images/willie.png'
     },
     {
       'creator': 'Sarah',
       'name':'name1',
       'desc':'desc1',
       'prefs':[2,3,1,4],
       'pic': 'link to an image?'
     },
     {
       'creator': 'Sarah',
       'name':'name2',
       'desc':'desc2',
       'prefs':[1,4,2,3],
       'pic': 'link to an image?'
     },
     {
       'creator': 'Sarah',
       'name':'name3',
       'desc':'desc3',
       'prefs':[3,2,4,1],
       'pic': 'link to an image?'
     },
     {
       'creator': 'Sarah',
       'name':'name4',
       'desc':'desc4',
       'prefs':[4,2,1,3],
       'pic': 'link to an image?'
     },
     {
       'creator': 'Sarah',
       'name':'name3',
       'desc':'desc3',
       'prefs':[3,2,4,1],
       'pic': 'link to an image?'
     },
     {
       'creator': 'Sarah',
       'name':'name4',
       'desc':'desc4',
       'prefs':[4,2,1,3],
       'pic': 'link to an image?'
     }
   ];

   // pull member names from npcs to populate whose party drop down and voting form
   var members = [];
   for(let i = 0;i < npcs.length;i++){
     var name = npcs[i].creator;
     if (!members.includes(name)){members.push(name)};
   }
   //var selectVoter = document.getElementById("selectVoter");
   //var select = document.getElementById("selectParty"); 
   $('#selectParty').empty();
   $('#selectVoter').empty();
   $.each(members, function(i, p) {
     $('#selectParty').append($('<option></option>').val(p.name).html(p));
     $('#selectVoter').append($('<option></option>').val(p.name).html(p));
   });
    
   //pull member from repsonse to drop down
   $("#selectParty").change(function(){
     var member = $("#selectParty option:selected").text();
     round(member); 
   });

  function round(member){
    npcsThisRound = [];
    //creates array of npcs in play this round
    for (let i =0; i<npcs.length;i++){
      var npc = npcs[i]; if(npcs[i].creator == member){npcsThisRound.push(npc)};
    };
    //TODO format cards in css
    $('#container').empty();
    npcRankings = [];
    npcsThisRound.forEach(npc => {
      var card = document.createElement("div");
      card.setAttribute("class","card");
      var name = document.createElement('h3');
      name.innerHTML = npc.name; name.setAttribute("class","charName");
      card.appendChild(name);
      var image = document.createElement('img');
      image.src = npc.pic;
      image.setAttribute("class","charImg");
      card.appendChild(image);
      var desc = npc.desc.split("/ ");
      var bullets = "";
      for (let i =0; i<desc.length; i++){
        bullets=bullets+"- "+desc[i]+ "</br>";
      };
      var description = document.createElement('div');
      description.setAttribute("class","charDesc");
      description.innerHTML = bullets;
      card.appendChild(description);
      let container = document.querySelector("#container");
      container.appendChild(card);
      npcRankings.push(npc.prefs); 
    });
    $('#0').empty();
    $('#1').empty();
    $('#2').empty();
    $('#3').empty(); 
    $('#4').empty();
    $('#5').empty(); 
    $.each(npcsThisRound, function(i,p) {
      $('#0').append($('<option></option>').val(i).html(p.name))
      $('#1').append($('<option></option>').val(i).html(p.name))
      $('#2').append($('<option></option>').val(i).html(p.name))
      $('#3').append($('<option></option>').val(i).html(p.name))
      $('#4').append($('<option></option>').val(i).html(p.name))
      $('#5').append($('<option></option>').val(i).html(p.name))
    });
  };
  $('#castVote').click(function() {
    setRanking();
  });
  function setRanking(){
    var voter = $("#selectVoter option:selected").text();
    var ranking = [];
    ranking[0] = parseInt($("#0 option:selected").val());
    ranking[1] = parseInt($("#1 option:selected").val());
    ranking[2] = parseInt($("#2 option:selected").val());
    ranking[3] = parseInt($("#3 option:selected").val());
    ranking[4] = parseInt($("#2 option:selected").val());
    ranking[5] = parseInt($("#3 option:selected").val());
    var index = members.indexOf(voter);
    memberRankings[index]=ranking;
  }
  $('#seeResults').click(function() {
    match(memberRankings,npcRankings);
  });
  function match(aprefs,bprefs) { console.log(aprefs,bprefs);
    pairs = [-1, -1, -1,-1,-1,-1]
    a = [true, true, true, true,  true, true];
    b = [true, true, true, true, true, true];
    for(let i=0; i<6; i++) { //i represents what number choice we are on	
      for(let j=0; j<6; j++) { //j represents book club members
        if(a[j]){
          var chooserIndex=aprefs[j][i];
          var chooser = b[chooserIndex];
          if(chooser){
            a[j] = false;
            b[chooserIndex]=false;
            pairs[chooserIndex]=j;
          } else{
            var currMate = pairs[chooserIndex];
            if(bprefs[chooserIndex].indexOf(j) < bprefs[chooserIndex].indexOf(currMate)){
              a[currMate]=true;
              a[j] = false;
              pairs[chooserIndex] = j;
            }
          }
        } 
      }
    }
   displayResults(pairs);              
 }
  function displayResults(pairs){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display="none";
    }; console.log(pairs);
    var resultsBox = document.getElementById('results');
    resultsBox.innerHTML = "";
    for(i=0;i<6;i++) {
      results.innerHTML += npcsThisRound[i].name + " & " + members[pairs[i]] + '</br>';
    }
  }
});
            
