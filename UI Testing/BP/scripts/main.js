import { world } from 'mojang-minecraft';
import { ActionFormData } from 'mojang-minecraft-ui';

const form = new ActionFormData()
    .button("§6Server 1")
    .button("§6Server 2")
    .button("§6Server 3")
    .button("§6Server 4")
    .title("E");

world.events.itemUse.subscribe(ev => {
    if (ev.item.id == 'minecraft:apple' && ev.source.id == 'minecraft:player') {
        var source = ev.source;
        form.show(ev.source).then(res => {
            source.runCommand(`tellraw @a {"rawtext":[{"text":"Selected Server ${res.selection + 1}"}]}`);
        });
    }
});