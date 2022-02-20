'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // 각 테이블에 컬럼이 있는 상태에서 foreign key만 여기서 추가해줌
    // mysql에 의도한 위치에 컬럼이 들어감
    await queryInterface.addConstraint('Articles', {
      fields: ['category_id'],
      type: "foreign key",
      name: "articles_category_id_fk",
      references: {
        table: "Categories",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    await queryInterface.addConstraint('Articles', {
      fields: ['region_id'],
      type: "foreign key",
      name: "articles_region_id_fk",
      references: {
        table: "Regions",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })

    // 아래 방식은 원래 테이블에 컬럼 없는 상태에서 컬럼을 새로 추가하면서 foreign key 넣는 방식
    // 실제 mysql에 표를 보면 컬럼이 createdAt, updatedAt 보다 밑으로 들어감
    // await queryInterface.addColumn("Articles", "category_id", {
    //   type: Sequelize.INTEGER,
    //   references: { 
    //     model: 'Categories', 
    //     key: 'id' 
    //   },
    // });
    // await queryInterface.addColumn("Articles", "region_id", {
    //   type: Sequelize.INTEGER,
    //   references: { 
    //     model: 'Regions', 
    //     key: 'id' 
    //   },
    // });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('Articles', 'articles_category_id_fk');
    // await queryInterface.removeConstraint('Articles', 'articles_region_id_fk');
  }
};