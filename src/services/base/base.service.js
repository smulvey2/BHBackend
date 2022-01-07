class BaseService{
  model;
  constructor(model) {
    this.model = model;
  }

  async getAll(){
    console.log(this.model)
    const data = await this.model.findAll();
    return data;
  }

  async getWhere(options){
    const data = await this.model.findAll(options);
    return data;
  }

  async create(model){
    const data = await this.model.create(model);
    return data;
  }

  async update(model, options){
    const data = await this.model.update(model, options);
    return data;
  }

  async delete(options){
    const data = await this.model.destroy(options);
    return data;
  }
}

module.exports = BaseService;