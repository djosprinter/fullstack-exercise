'use strict';

const sql = `
CREATE TABLE IF NOT EXISTS "result_statuses" ("id" INTEGER UNIQUE , "value" VARCHAR(255) NOT NULL UNIQUE, PRIMARY KEY ("id"));
CREATE TABLE IF NOT EXISTS "results" ("id"  SERIAL UNIQUE , "statusId" INTEGER REFERENCES "result_statuses" ("id") ON DELETE NO ACTION ON UPDATE CASCADE, "repositoryName" VARCHAR(255) NOT NULL, "findings" JSONB, "queuedAt" TIMESTAMP WITH TIME ZONE, "scanningAt" TIMESTAMP WITH TIME ZONE, "finishedAt" TIMESTAMP WITH TIME ZONE, PRIMARY KEY ("id"));
    insert into public."result_statuses"("id", "value") values (1, 'Queued');
    insert into public."result_statuses"("id", "value") values (2, 'In Progress');
    insert into public."result_statuses"("id", "value") values (3, 'Success');
    insert into public."result_statuses"("id", "value") values (4, 'Failure');
    `;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(sql);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
