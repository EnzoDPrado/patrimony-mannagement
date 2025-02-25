import { CreatePatrimonyRepository, DeletePatrimonyRepository, GetPatrimoniesRepository, UpdatePatrimonyRepository } from "../../../main/data/protocols";
import { Repository } from "../repository";

export class PatrimonyRepository
 extends Repository
implements CreatePatrimonyRepository, DeletePatrimonyRepository, GetPatrimoniesRepository, UpdatePatrimonyRepository {
    async update(params: UpdatePatrimonyRepository.Params): UpdatePatrimonyRepository.Result {
        const updateData = {
            name: params.name,
            quantity: params.quantity
        }

        const formattedUpdateData = JSON.parse(JSON.stringify(updateData));
        
        await this.knex('tb_patrimony').update(formattedUpdateData).where('patrimony_id', params.patrimony_id)
    }

    async getPatrimonies(): GetPatrimoniesRepository.Result {
        const query = this.knex('tb_patrimony')
        .select({
            patrimony_name: 'tb_patrimony.name',
            quantity:'tb_patrimony.quantity',
            senai_id: 'tb_senai.senai_id',
            senai_name: 'tb_senai.name',
            senai_address: 'tb_senai.address',
            senai_cep: 'tb_senai.cep',
            senai_unit: 'tb_senai.unit',
            type_id: 'tb_type_patrimony.type_patrimony_id',
            type_name: 'tb_type_patrimony.name'
        })
        .innerJoin('tb_senai', 'tb_senai.senai_id', 'tb_patrimony.senai_id')
        .innerJoin('tb_type_patrimony', 'tb_type_patrimony.type_patrimony_id', 'tb_patrimony.type_patrimony_id')

        const record = await query;

        return record;
    }

    async deleteByPatrimonyId({patrimony_id}: DeletePatrimonyRepository.Params): DeletePatrimonyRepository.Result {
        await this.knex('tb_patrimony').delete().where('patrimony_id', patrimony_id)
    }

    async create(params: CreatePatrimonyRepository.Params): CreatePatrimonyRepository.Result {
        const patrimony_id = await this.knex('tb_patrimony').insert(params).returning('patrimony_id')

        return patrimony_id[0]
    }
}