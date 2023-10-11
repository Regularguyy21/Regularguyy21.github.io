function rollAbilityScores() {
    const abilityScores = [];
    for (let i = 0; i < 6; i++) {
      const rolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => a - b);
      const totalScore = rolls.slice(1).reduce((sum, roll) => sum + roll, 0);
      abilityScores.push(totalScore);
    }
    for(let j = 0; j < 6; j++) {
      document.getElementById(`rolledScore${j}`).value = abilityScores[j];
    }
  }
  function updateDropdown(selectedDropdown) {
    selectedAbility=selectedDropdown.value
    var numberDropdowns = document.getElementsByClassName('custom-dropdown');
  
    // Loop through all number dropdowns
    for (var i = 0; i < numberDropdowns.length; i++) {
      var numberDropdown = numberDropdowns[i];
      
      // Skip the selected number dropdown
      if (numberDropdown !== selectedDropdown && selectedAbility !== "") {
        var abilityOptions = numberDropdown.getElementsByTagName('option');
        
        // Loop through the ability options of the other number dropdowns
        for (var j = 0; j < abilityOptions.length; j++) {
          if (abilityOptions[j].value === selectedAbility) {
            abilityOptions[j].disabled = true;
          }
        }
      }
    }
  }
  function assignAbilities() {
    for(var i=0;i<6;i++) {
      if(document.getElementById("dropdown" + (i+1)).value == "Strength") {
        document.getElementById("strength").value = document.getElementById("rolledScore"+i).value
      } else if(document.getElementById("dropdown" + (i+1)).value == "Dexterity") {
        document.getElementById("dexterity").value = document.getElementById("rolledScore"+i).value
      } else if(document.getElementById("dropdown" + (i+1)).value == "Constitution") {
        document.getElementById("constitution").value = document.getElementById("rolledScore"+i).value
      } else if(document.getElementById("dropdown" + (i+1)).value == "Intelligence") {
        document.getElementById("intelligence").value = document.getElementById("rolledScore"+i).value
      } else if(document.getElementById("dropdown" + (i+1)).value == "Wisdom") {
        document.getElementById("wisdom").value = document.getElementById("rolledScore"+i).value
      } else if(document.getElementById("dropdown" + (i+1)).value == "Charisma") {
        document.getElementById("charisma").value = document.getElementById("rolledScore"+i).value
      }
    }
  }
  function calculateFinalScores() {
    const abilityScores = {
      strength: parseInt(document.getElementById("strength").value) || 0,
      dexterity: parseInt(document.getElementById("dexterity").value) || 0,
      constitution: parseInt(document.getElementById("constitution").value) || 0,
      intelligence: parseInt(document.getElementById("intelligence").value) || 0,
      wisdom: parseInt(document.getElementById("wisdom").value) || 0,
      charisma: parseInt(document.getElementById("charisma").value) || 0
    };
  
    const raceModifiers = [];
    for (let i = 1; i <= 6; i++) {
      raceModifiers.push(parseInt(document.getElementById(`raceModifier${i}`).value) || 0);
    }
  
    const abilityImprovements = [];
    for (let i = 1; i <= 6; i++) {
      abilityImprovements.push(parseInt(document.getElementById(`abilityImprovements${i}`).value) || 0);
    }
  
    const miscModifiers = [];
    for (let i = 1; i <= 6; i++) {
      miscModifiers.push(parseInt(document.getElementById(`miscModifier${i}`).value) || 0);
    }
  
    const finalScores = {
      strength: abilityScores.strength + raceModifiers[0] + abilityImprovements[0] + miscModifiers[0],
      dexterity: abilityScores.dexterity + raceModifiers[1] + abilityImprovements[1] + miscModifiers[1],
      constitution: abilityScores.constitution + raceModifiers[2] + abilityImprovements[2] + miscModifiers[2],
      intelligence: abilityScores.intelligence + raceModifiers[3] + abilityImprovements[3] + miscModifiers[3],
      wisdom: abilityScores.wisdom + raceModifiers[4] + abilityImprovements[4] + miscModifiers[4],
      charisma: abilityScores.charisma + raceModifiers[5] + abilityImprovements[5] + miscModifiers[5]
    };
  
    // Display the final ability scores
    document.getElementById("finalScores").innerHTML = `
      STR: ${finalScores.strength}<br>
      DEX: ${finalScores.dexterity}<br>
      CON: ${finalScores.constitution}<br>
      INT: ${finalScores.intelligence}<br>
      WIS: ${finalScores.wisdom}<br>
      CHA: ${finalScores.charisma}
    `;
  }
  
  function sumArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
  }