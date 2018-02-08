export abstract class AbstractHandler {
    abstract findAll();
    abstract findByCondition(condition, callback?);
    abstract findById(id, callback?);
    abstract add(body, callback?);
    abstract edit(body, callback?);
    abstract remove(id);
    abstract removeList(idList);
    abstract combineURL(pathParam);
}
