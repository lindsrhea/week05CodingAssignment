// Use at least one array

// Use at least two classes
// ex: class food {

// }

// Menu should have the options to create, view, and delete
class RescueCenter {
    constructor(registery) {
        this.registery = registery;
    }
}

class Rescue {
    constructor(category, name) {
        this.category = category
        this.name = name
    }
    returnRescue() {
        obj = {
            category : this.category,
            name : this.name
        }
        return obj
    }
}

// creating the menu itself
class Menu {
    constructor() {
        this.registery = {};
    }
    // what will start up the rescue application?
    start() {
        let choice = this.mainMenu();
        console.log(choice === "1")
        while (choice != 0) {
            switch (choice) {
                case '1':
                    this.createNewRescue();
                    break;
                case '2':
                    this.viewAllRescues();
                    break;
                case '3':
                    this.deleteAnimalWasRescued();
                    break;
            }

            choice = this.mainMenu();
        }

        alert('Bye bye!');
    }

    mainMenu() {
        console.log("registry: ", this.registery)
        return prompt(`
            Please Input a number to select action.
            0) exit
            1) create new rescue
            2) view all rescues
            3) remove rescue from registry
        `);
    }

    createNewRescue() {
        let category = prompt('Please enter type of animal: ["cat", "dog", "fish", "reptile", "rodent"]');
        console.log('category: ' + category)
        let name = prompt('Enter the name of the animal:');
        const new_animal = new Rescue(category, name)
        this.registery[`${new_animal.name}`] = `${new_animal.category}`
        alert(`${new_animal.name} the ${new_animal.category} was added to the registery`)
    }

    viewAllRescues() {
        console.log("entered veiw all")
        if (Object.values(this.registery).length > 0) {
            console.log("Entered if statement")
            for (const [key, value] of Object.entries(this.registery)) {
                console.log(`${key}: ${value}`);
                let index = alert(`
                These are all the animals currently in the rescue.
                ${key}: ${value}
                `);
              }
        } else {
            alert(`No rescues have been registered...`)
        }
    }

    deleteAnimalWasRescued() {
        let name = prompt('Please enter the name of a registered animal to remove it from the registry:')
        if (this.registery.hasOwnProperty(name)) {
            delete this.registery[`${name}`];
            alert(`${name} was removed from the registry...`)
        } else {
            alert(`${name} was not found in the registry, no changes were made...`)
        }
    }
}


let menu = new Menu();
menu.start();
