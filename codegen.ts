import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://beta.pokeapi.co/graphql/v1beta",
    documents: "src/services/**/*.ts",
    generates: {
        "src/gql/": {
            preset: "client"
        }
    },
    ignoreNoDocuments: true
};

export default config;
