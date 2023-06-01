
class App {
    dom = null;
    testList = null;
    db = null;
    constructor() { }

    async init() {
        await this.startDexie();
        this.dom = this.render();
    }

    startDexie = async () => {
        this.db = new Dexie("classtrack");
        this.db.version(1).stores({
            users: "++id, name"
        });
        try {
            // await this.db.users.bulkAdd([{ name: "John Doe" }, { name: "Jane Doe" }]);
            this.testList = await this.db.users.toArray();
            console.log(this.testList);
        } catch (error) {
            alert("Error: " + error);
        }
    };

    render = () => {
        let html = `
        ${this.renderHeader()}
        ${this.renderBody()}
        ${this.renderFooter()}
        `;
        const content = document.createElement("div");
        content.innerHTML = html;
        return content;
    }

    renderHeader = () => {
        let html = "";
        this.testList.forEach((test) => {
            html += `<p>${test.name}</p>`;
        }
        );
        return html;
    }

    renderBody = () => {
        return `<p>Testing...</p>`;
    }

    renderFooter = () => {
        return ``;
    }
};