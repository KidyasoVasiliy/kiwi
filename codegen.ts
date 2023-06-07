import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: {
    [process.env.REACT_APP_HASURA_GRAPHQL_URL!]: {
      headers: {
        'X-Hasura-Admin-Secret':
          process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!,
      },
    },
  },
  documents: ['src/**/*.tsx', '!src/gql/**/*'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
  watch: true,
};

export default config;
