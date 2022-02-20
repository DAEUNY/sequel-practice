'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // 각 테이블에 컬럼이 있는 상태에서 foreign key만 여기서 추가해줌
    // mysql에 의도한 위치에 컬럼이 들어감
    // await queryInterface.addConstraint('Chats', {
    //   fields: ['user_id'],
    //   type: "foreign key",
    //   name: "Chats_user_id_fk",
    //   references: {
    //     table: "Users",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // }),
    // await queryInterface.addConstraint('Chats', {
    //   fields: ['article_id'],
    //   type: "foreign key",
    //   name: "chats_article_id_fk",
    //   references: {
    //     table: "Articles",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // })

    await queryInterface.addColumn('Chats', 'user_id',{
      type: Sequelize.INTEGER,
      references: { 
        model: 'Users', 
        key: 'id' 
      },
    })
    await queryInterface.addColumn("Chats", "article_id", {
      type: Sequelize.INTEGER,
      references: { 
        model: 'Articles', 
        key: 'id' 
      },
    })
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('Chats', 'chats_user_id_fk');
    // await queryInterface.removeConstraint('Chats', 'chats_article_id_fk');
    await queryInterface.removeColumn('Chats', 'user_id');
    await queryInterface.removeColumn('Chats', 'article_id');
  }
};