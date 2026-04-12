const _id = new WeakMap();
const _name = new WeakMap();
const privateProps = new WeakMap();
// Class Declaration
class Referee {
    constructor(id, name) {
        // instance properties/members
        // _id.set(this, id);
        // _name.set(this, name);
        privateProps.set(this, { 
            id, 
            name, 
            privateMethod: () => {
                console.log('private method');
            }
        });
        this.blowWhistle = function() {
            console.log('blow whistle');
        };
    }
    // prototype properties/members
    run() {
        console.log(`${this.name} running as Referee`);
    }
    checkTime() {
        console.log(`${this} running as Referee`);
    }

    static test() {
        console.log('static test');
    }

    // getter for name
    get name() {
        return privateProps.get(this).name;
    }

    set name(newName) {
        privateProps.get(this).name = newName;
    }

    // getter for id
    get id() {
        return privateProps.get(this).id;
    }
}

const r = new Referee(3, 'John');