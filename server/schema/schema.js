//const { projects, clients } = require('../sampleData.js');







const Project = require('../models/Project');
const Client = require('../models/Client');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt } = require('graphql');



const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});



const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},

        description: {type: GraphQLString},
        status: {type: GraphQLString},

        client: {
            type: ClientType,
            resolve(parent, args){
//                return clients.find(client => client.id === parent.clientId)
                return Client.findById(parent.clientId);

            }
        },

    })
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        client: {
            type: ClientType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
//                return clients.find(client => client.id === args.id);
                return Client.findById(args.id);

            }
        },

        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args){
//                return clients;
                return Client.find();

            }
        },

        project: {
            type: ProjectType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
//                return projects.find(project => project.id === args.id)
                return Project.findById(args.id);

            }
        },

        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args){
//                return projects;
                return Project.find();

            }
        }

    }
});



module.exports = new GraphQLSchema({
    query: RootQuery
});
