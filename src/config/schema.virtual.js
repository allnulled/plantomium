module.exports = {
  columns: {
    chat_messages: {
      id: {
        order: 1,
        model: 'ChatMessages',
        table: 'chat_messages',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 2,
        model: 'ChatMessages',
        table: 'chat_messages',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'chat_messages_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      message: {
        order: 3,
        model: 'ChatMessages',
        table: 'chat_messages',
        column: 'message',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 500,
        database: 'plants_bd',
        archetype: 'varchar(500)'
      },
      created_at: {
        order: 4,
        model: 'ChatMessages',
        table: 'chat_messages',
        column: 'created_at',
        type: 'date',
        typeTerm: 'datetime',
        subtype: 'datetime',
        'default': 'CURRENT_TIMESTAMP',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'datetime'
      }
    },
    combo_compound_and_plant: {
      id: {
        order: 1,
        model: 'ComboCompoundAndPlant',
        table: 'combo_compound_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboCompoundAndPlant',
        table: 'combo_compound_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_compound_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_compound: {
        order: 3,
        model: 'ComboCompoundAndPlant',
        table: 'combo_compound_and_plant',
        column: 'id_compound',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_compound_and_plant_ibfk_1',
            model: 'Compound',
            table: 'compound',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      percentage: {
        order: 4,
        model: 'ComboCompoundAndPlant',
        table: 'combo_compound_and_plant',
        column: 'percentage',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(100)'
      },
      description: {
        order: 5,
        model: 'ComboCompoundAndPlant',
        table: 'combo_compound_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_environment_and_plant: {
      id: {
        order: 1,
        model: 'ComboEnvironmentAndPlant',
        table: 'combo_environment_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboEnvironmentAndPlant',
        table: 'combo_environment_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_environment_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_environment: {
        order: 3,
        model: 'ComboEnvironmentAndPlant',
        table: 'combo_environment_and_plant',
        column: 'id_environment',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_environment_and_plant_ibfk_1',
            model: 'Environment',
            table: 'environment',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboEnvironmentAndPlant',
        table: 'combo_environment_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_group_and_permission: {
      id: {
        order: 1,
        model: 'ComboGroupAndPermission',
        table: 'combo_group_and_permission',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_group: {
        order: 2,
        model: 'ComboGroupAndPermission',
        table: 'combo_group_and_permission',
        column: 'id_group',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_group_and_permission_ibfk_1',
            model: 'Groups',
            table: 'groups',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_permission: {
        order: 3,
        model: 'ComboGroupAndPermission',
        table: 'combo_group_and_permission',
        column: 'id_permission',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_group_and_permission_ibfk_2',
            model: 'Permissions',
            table: 'permissions',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      }
    },
    combo_image_and_plant: {
      id: {
        order: 1,
        model: 'ComboImageAndPlant',
        table: 'combo_image_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboImageAndPlant',
        table: 'combo_image_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_image_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_image: {
        order: 3,
        model: 'ComboImageAndPlant',
        table: 'combo_image_and_plant',
        column: 'id_image',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_image_and_plant_ibfk_1',
            model: 'Image',
            table: 'image',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboImageAndPlant',
        table: 'combo_image_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_image_and_specimen: {
      id: {
        order: 1,
        model: 'ComboImageAndSpecimen',
        table: 'combo_image_and_specimen',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_specimen: {
        order: 2,
        model: 'ComboImageAndSpecimen',
        table: 'combo_image_and_specimen',
        column: 'id_specimen',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_image_and_specimen_ibfk_2',
            model: 'Specimen',
            table: 'specimen',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_image: {
        order: 3,
        model: 'ComboImageAndSpecimen',
        table: 'combo_image_and_specimen',
        column: 'id_image',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_image_and_specimen_ibfk_1',
            model: 'Image',
            table: 'image',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboImageAndSpecimen',
        table: 'combo_image_and_specimen',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_localization_and_plant: {
      id: {
        order: 1,
        model: 'ComboLocalizationAndPlant',
        table: 'combo_localization_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboLocalizationAndPlant',
        table: 'combo_localization_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_localization_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_localization: {
        order: 3,
        model: 'ComboLocalizationAndPlant',
        table: 'combo_localization_and_plant',
        column: 'id_localization',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_localization_and_plant_ibfk_1',
            model: 'Localization',
            table: 'localization',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboLocalizationAndPlant',
        table: 'combo_localization_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_trait_and_plant: {
      id: {
        order: 1,
        model: 'ComboTraitAndPlant',
        table: 'combo_trait_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboTraitAndPlant',
        table: 'combo_trait_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_trait_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_trait: {
        order: 3,
        model: 'ComboTraitAndPlant',
        table: 'combo_trait_and_plant',
        column: 'id_trait',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_trait_and_plant_ibfk_1',
            model: 'Trait',
            table: 'trait',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboTraitAndPlant',
        table: 'combo_trait_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_trait_and_specimen: {
      id: {
        order: 1,
        model: 'ComboTraitAndSpecimen',
        table: 'combo_trait_and_specimen',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_specimen: {
        order: 2,
        model: 'ComboTraitAndSpecimen',
        table: 'combo_trait_and_specimen',
        column: 'id_specimen',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_trait_and_specimen_ibfk_2',
            model: 'Specimen',
            table: 'specimen',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_trait: {
        order: 3,
        model: 'ComboTraitAndSpecimen',
        table: 'combo_trait_and_specimen',
        column: 'id_trait',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_trait_and_specimen_ibfk_1',
            model: 'Trait',
            table: 'trait',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboTraitAndSpecimen',
        table: 'combo_trait_and_specimen',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_usage_and_plant: {
      id: {
        order: 1,
        model: 'ComboUsageAndPlant',
        table: 'combo_usage_and_plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'ComboUsageAndPlant',
        table: 'combo_usage_and_plant',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_usage_and_plant_ibfk_2',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_usage: {
        order: 3,
        model: 'ComboUsageAndPlant',
        table: 'combo_usage_and_plant',
        column: 'id_usage',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'combo_usage_and_plant_ibfk_1',
            model: 'Usages',
            table: 'usages',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'ComboUsageAndPlant',
        table: 'combo_usage_and_plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    combo_user_and_group: {
      id: {
        order: 1,
        model: 'ComboUserAndGroup',
        table: 'combo_user_and_group',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 2,
        model: 'ComboUserAndGroup',
        table: 'combo_user_and_group',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_user_and_group_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_group: {
        order: 3,
        model: 'ComboUserAndGroup',
        table: 'combo_user_and_group',
        column: 'id_group',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_user_and_group_ibfk_2',
            model: 'Groups',
            table: 'groups',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      }
    },
    combo_user_and_permission: {
      id: {
        order: 1,
        model: 'ComboUserAndPermission',
        table: 'combo_user_and_permission',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 2,
        model: 'ComboUserAndPermission',
        table: 'combo_user_and_permission',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_user_and_permission_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_permission: {
        order: 3,
        model: 'ComboUserAndPermission',
        table: 'combo_user_and_permission',
        column: 'id_permission',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'combo_user_and_permission_ibfk_2',
            model: 'Permissions',
            table: 'permissions',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      }
    },
    compound: {
      id: {
        order: 1,
        model: 'Compound',
        table: 'compound',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboCompoundAndPlant',
            table: 'combo_compound_and_plant',
            column: 'id_compound',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Compound',
        table: 'compound',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      referencia: {
        order: 3,
        model: 'Compound',
        table: 'compound',
        column: 'referencia',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 500,
        database: 'plants_bd',
        archetype: 'varchar(500)'
      },
      description: {
        order: 4,
        model: 'Compound',
        table: 'compound',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    configuration: {
      id: {
        order: 1,
        model: 'Configuration',
        table: 'configuration',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 2,
        model: 'Configuration',
        table: 'configuration',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: true,
        referencesTo: [
          {
            id: 'configuration_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      aspect: {
        order: 3,
        model: 'Configuration',
        table: 'configuration',
        column: 'aspect',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 600,
        database: 'plants_bd',
        archetype: 'varchar(600)'
      },
      value: {
        order: 4,
        model: 'Configuration',
        table: 'configuration',
        column: 'value',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    environment: {
      id: {
        order: 1,
        model: 'Environment',
        table: 'environment',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboEnvironmentAndPlant',
            table: 'combo_environment_and_plant',
            column: 'id_environment',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Environment',
        table: 'environment',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 300,
        database: 'plants_bd',
        archetype: 'varchar(300)'
      },
      description: {
        order: 3,
        model: 'Environment',
        table: 'environment',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    example_process: {
      id: {
        order: 1,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ExampleProcessTransaction',
            table: 'example_process_transaction',
            column: 'id_process',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_creator: {
        order: 2,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'id_creator',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'example_process_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      data: {
        order: 3,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'data',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      meta: {
        order: 4,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'meta',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      transactions: {
        order: 5,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'transactions',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': '1',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      status: {
        order: 6,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'status',
        type: 'list',
        typeTerm: 'enum',
        subtype: 'enum',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: [
          'started',
          'continued',
          'outdated'
        ],
        maxTextLength: 9,
        database: 'plants_bd',
        archetype: 'enum(\'started\',\'continued\',\'outdated\')'
      },
      created_at: {
        order: 7,
        model: 'ExampleProcess',
        table: 'example_process',
        column: 'created_at',
        type: 'date',
        typeTerm: 'datetime',
        subtype: 'datetime',
        'default': 'CURRENT_TIMESTAMP',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'datetime'
      }
    },
    example_process_transaction: {
      id: {
        order: 1,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_process: {
        order: 2,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'id_process',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'example_process_transaction_ibfk_1',
            model: 'ExampleProcess',
            table: 'example_process',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_transactor: {
        order: 3,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'id_transactor',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'example_process_transaction_ibfk_2',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      operation: {
        order: 4,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'operation',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 60,
        database: 'plants_bd',
        archetype: 'varchar(60)'
      },
      description: {
        order: 5,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'description',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      created_at: {
        order: 6,
        model: 'ExampleProcessTransaction',
        table: 'example_process_transaction',
        column: 'created_at',
        type: 'date',
        typeTerm: 'datetime',
        subtype: 'datetime',
        'default': 'CURRENT_TIMESTAMP',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'datetime'
      }
    },
    filesystem: {
      id: {
        order: 1,
        model: 'Filesystem',
        table: 'filesystem',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      nodetype: {
        order: 2,
        model: 'Filesystem',
        table: 'filesystem',
        column: 'nodetype',
        type: 'list',
        typeTerm: 'enum',
        subtype: 'enum',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: [
          'branch',
          'leaf'
        ],
        maxTextLength: 6,
        database: 'plants_bd',
        archetype: 'enum(\'branch\',\'leaf\')'
      },
      path: {
        order: 3,
        model: 'Filesystem',
        table: 'filesystem',
        column: 'path',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      contents: {
        order: 4,
        model: 'Filesystem',
        table: 'filesystem',
        column: 'contents',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      description: {
        order: 5,
        model: 'Filesystem',
        table: 'filesystem',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    groups: {
      id: {
        order: 1,
        model: 'Groups',
        table: 'groups',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboGroupAndPermission',
            table: 'combo_group_and_permission',
            column: 'id_group',
            isPrimaryKey: false
          },
          {
            model: 'ComboUserAndGroup',
            table: 'combo_user_and_group',
            column: 'id_group',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Groups',
        table: 'groups',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      description: {
        order: 3,
        model: 'Groups',
        table: 'groups',
        column: 'description',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 500,
        database: 'plants_bd',
        archetype: 'varchar(500)',
        auth: {
          onGet: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPost: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPut: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          }
        }
      }
    },
    history_data: {
      id: {
        order: 1,
        model: 'HistoryData',
        table: 'history_data',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      user_ip: {
        order: 2,
        model: 'HistoryData',
        table: 'history_data',
        column: 'user_ip',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 40,
        database: 'plants_bd',
        archetype: 'varchar(40)'
      },
      user_agent: {
        order: 3,
        model: 'HistoryData',
        table: 'history_data',
        column: 'user_agent',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 120,
        database: 'plants_bd',
        archetype: 'varchar(120)'
      },
      user_id: {
        order: 4,
        model: 'HistoryData',
        table: 'history_data',
        column: 'user_id',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 20,
        database: 'plants_bd',
        archetype: 'varchar(20)'
      },
      original_table: {
        order: 5,
        model: 'HistoryData',
        table: 'history_data',
        column: 'original_table',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 120,
        database: 'plants_bd',
        archetype: 'varchar(120)'
      },
      request_data: {
        order: 6,
        model: 'HistoryData',
        table: 'history_data',
        column: 'request_data',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      data: {
        order: 7,
        model: 'HistoryData',
        table: 'history_data',
        column: 'data',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      metadata: {
        order: 8,
        model: 'HistoryData',
        table: 'history_data',
        column: 'metadata',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      description: {
        order: 9,
        model: 'HistoryData',
        table: 'history_data',
        column: 'description',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      deleted_at: {
        order: 10,
        model: 'HistoryData',
        table: 'history_data',
        column: 'deleted_at',
        type: 'date',
        typeTerm: 'datetime',
        subtype: 'datetime',
        'default': 'CURRENT_TIMESTAMP',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'datetime'
      }
    },
    history_event: {
      id: {
        order: 1,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      user_ip: {
        order: 2,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'user_ip',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 40,
        database: 'plants_bd',
        archetype: 'varchar(40)'
      },
      user_agent: {
        order: 3,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'user_agent',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 120,
        database: 'plants_bd',
        archetype: 'varchar(120)'
      },
      user_id: {
        order: 4,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'user_id',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 20,
        database: 'plants_bd',
        archetype: 'varchar(20)'
      },
      original_table: {
        order: 5,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'original_table',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 120,
        database: 'plants_bd',
        archetype: 'varchar(120)'
      },
      event: {
        order: 6,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'event',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 120,
        database: 'plants_bd',
        archetype: 'varchar(120)'
      },
      data: {
        order: 7,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'data',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      metadata: {
        order: 8,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'metadata',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      description: {
        order: 9,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'description',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      deleted_at: {
        order: 10,
        model: 'HistoryEvent',
        table: 'history_event',
        column: 'deleted_at',
        type: 'date',
        typeTerm: 'datetime',
        subtype: 'datetime',
        'default': 'CURRENT_TIMESTAMP',
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'datetime'
      }
    },
    image: {
      id: {
        order: 1,
        model: 'Image',
        table: 'image',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboImageAndPlant',
            table: 'combo_image_and_plant',
            column: 'id_image',
            isPrimaryKey: false
          },
          {
            model: 'ComboImageAndSpecimen',
            table: 'combo_image_and_specimen',
            column: 'id_image',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_specimen: {
        order: 2,
        model: 'Image',
        table: 'image',
        column: 'id_specimen',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 3,
        model: 'Image',
        table: 'image',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'image_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'Image',
        table: 'image',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    localization: {
      id: {
        order: 1,
        model: 'Localization',
        table: 'localization',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboLocalizationAndPlant',
            table: 'combo_localization_and_plant',
            column: 'id_localization',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Localization',
        table: 'localization',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 300,
        database: 'plants_bd',
        archetype: 'varchar(300)'
      },
      description: {
        order: 3,
        model: 'Localization',
        table: 'localization',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    permissions: {
      id: {
        order: 1,
        model: 'Permissions',
        table: 'permissions',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboGroupAndPermission',
            table: 'combo_group_and_permission',
            column: 'id_permission',
            isPrimaryKey: false
          },
          {
            model: 'ComboUserAndPermission',
            table: 'combo_user_and_permission',
            column: 'id_permission',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Permissions',
        table: 'permissions',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      description: {
        order: 3,
        model: 'Permissions',
        table: 'permissions',
        column: 'description',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 500,
        database: 'plants_bd',
        archetype: 'varchar(500)'
      }
    },
    plant: {
      id: {
        order: 1,
        model: 'Plant',
        table: 'plant',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboCompoundAndPlant',
            table: 'combo_compound_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'ComboEnvironmentAndPlant',
            table: 'combo_environment_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'ComboImageAndPlant',
            table: 'combo_image_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'ComboLocalizationAndPlant',
            table: 'combo_localization_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'ComboTraitAndPlant',
            table: 'combo_trait_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'ComboUsageAndPlant',
            table: 'combo_usage_and_plant',
            column: 'id_plant',
            isPrimaryKey: false
          },
          {
            model: 'PlantDetails',
            table: 'plant_details',
            column: 'id_plant',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Plant',
        table: 'plant',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      name_scientific: {
        order: 3,
        model: 'Plant',
        table: 'plant',
        column: 'name_scientific',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      name_popular: {
        order: 4,
        model: 'Plant',
        table: 'plant',
        column: 'name_popular',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      },
      description: {
        order: 5,
        model: 'Plant',
        table: 'plant',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text',
        auth: {
          onPut: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          }
        }
      },
      field_1: {
        order: 6,
        model: 'Plant',
        table: 'plant',
        column: 'field_1',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      field_2: {
        order: 7,
        model: 'Plant',
        table: 'plant',
        column: 'field_2',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      field_3: {
        order: 8,
        model: 'Plant',
        table: 'plant',
        column: 'field_3',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      field_4: {
        order: 9,
        model: 'Plant',
        table: 'plant',
        column: 'field_4',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)',
        auth: {
          onPost: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPut: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          }
        }
      },
      field_5: {
        order: 10,
        model: 'Plant',
        table: 'plant',
        column: 'field_5',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)',
        auth: {
          onPost: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPut: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onGet: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          }
        }
      }
    },
    plant_details: {
      id: {
        order: 1,
        model: 'PlantDetails',
        table: 'plant_details',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'PlantDetails',
        table: 'plant_details',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'plant_details_ibfk_1',
            model: 'Plant',
            table: 'plant',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 3,
        model: 'PlantDetails',
        table: 'plant_details',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text',
        auth: {
          onGet: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPost: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          },
          onPut: {
            require: {
              permissions: [
                'to administrate'
              ],
              groups: [
                'administration'
              ],
              users: [
                'administrator'
              ]
            }
          }
        }
      }
    },
    sessions: {
      id: {
        order: 1,
        model: 'Sessions',
        table: 'sessions',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 2,
        model: 'Sessions',
        table: 'sessions',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'sessions_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      session_token: {
        order: 3,
        model: 'Sessions',
        table: 'sessions',
        column: 'session_token',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      refresh_token: {
        order: 4,
        model: 'Sessions',
        table: 'sessions',
        column: 'refresh_token',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      }
    },
    specimen: {
      id: {
        order: 1,
        model: 'Specimen',
        table: 'specimen',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboImageAndSpecimen',
            table: 'combo_image_and_specimen',
            column: 'id_specimen',
            isPrimaryKey: false
          },
          {
            model: 'ComboTraitAndSpecimen',
            table: 'combo_trait_and_specimen',
            column: 'id_specimen',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_plant: {
        order: 2,
        model: 'Specimen',
        table: 'specimen',
        column: 'id_plant',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_user: {
        order: 3,
        model: 'Specimen',
        table: 'specimen',
        column: 'id_user',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: true,
        isUnique: false,
        referencesTo: [
          {
            id: 'specimen_ibfk_1',
            model: 'Users',
            table: 'users',
            column: 'id',
            isPrimaryKey: false
          }
        ],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      description: {
        order: 4,
        model: 'Specimen',
        table: 'specimen',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    trait: {
      id: {
        order: 1,
        model: 'Trait',
        table: 'trait',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboTraitAndPlant',
            table: 'combo_trait_and_plant',
            column: 'id_trait',
            isPrimaryKey: false
          },
          {
            model: 'ComboTraitAndSpecimen',
            table: 'combo_trait_and_specimen',
            column: 'id_trait',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Trait',
        table: 'trait',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 1000,
        database: 'plants_bd',
        archetype: 'varchar(1000)'
      },
      description: {
        order: 3,
        model: 'Trait',
        table: 'trait',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    trait_details: {
      id: {
        order: 1,
        model: 'TraitDetails',
        table: 'trait_details',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_trait: {
        order: 2,
        model: 'TraitDetails',
        table: 'trait_details',
        column: 'id_trait',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      details: {
        order: 3,
        model: 'TraitDetails',
        table: 'trait_details',
        column: 'details',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    trait_secret_details: {
      id: {
        order: 1,
        model: 'TraitSecretDetails',
        table: 'trait_secret_details',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      id_trait: {
        order: 2,
        model: 'TraitSecretDetails',
        table: 'trait_secret_details',
        column: 'id_trait',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      details: {
        order: 3,
        model: 'TraitSecretDetails',
        table: 'trait_secret_details',
        column: 'details',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    usages: {
      id: {
        order: 1,
        model: 'Usages',
        table: 'usages',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ComboUsageAndPlant',
            table: 'combo_usage_and_plant',
            column: 'id_usage',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Usages',
        table: 'usages',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 300,
        database: 'plants_bd',
        archetype: 'varchar(300)'
      },
      description: {
        order: 3,
        model: 'Usages',
        table: 'usages',
        column: 'description',
        type: 'text',
        typeTerm: 'text',
        subtype: 'text',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 65535,
        database: 'plants_bd',
        archetype: 'text'
      }
    },
    users: {
      id: {
        order: 1,
        model: 'Users',
        table: 'users',
        column: 'id',
        type: 'number',
        typeTerm: 'int',
        subtype: 'int',
        'default': null,
        extra: 'auto_increment',
        isPrimaryKey: true,
        isAutoIncrement: true,
        isNullable: false,
        isFloat: true,
        isUnsigned: false,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [
          {
            model: 'ChatMessages',
            table: 'chat_messages',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'ComboUserAndGroup',
            table: 'combo_user_and_group',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'ComboUserAndPermission',
            table: 'combo_user_and_permission',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'Configuration',
            table: 'configuration',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'ExampleProcess',
            table: 'example_process',
            column: 'id_creator',
            isPrimaryKey: false
          },
          {
            model: 'ExampleProcessTransaction',
            table: 'example_process_transaction',
            column: 'id_transactor',
            isPrimaryKey: false
          },
          {
            model: 'Image',
            table: 'image',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'Sessions',
            table: 'sessions',
            column: 'id_user',
            isPrimaryKey: false
          },
          {
            model: 'Specimen',
            table: 'specimen',
            column: 'id_user',
            isPrimaryKey: false
          }
        ],
        optionsList: null,
        maxTextLength: null,
        database: 'plants_bd',
        archetype: 'int(11)'
      },
      name: {
        order: 2,
        model: 'Users',
        table: 'users',
        column: 'name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: true,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 200,
        database: 'plants_bd',
        archetype: 'varchar(200)'
      },
      full_name: {
        order: 4,
        model: 'Users',
        table: 'users',
        column: 'full_name',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 400,
        database: 'plants_bd',
        archetype: 'varchar(400)'
      },
      profile_picture: {
        order: 8,
        model: 'Users',
        table: 'users',
        column: 'profile_picture',
        type: 'text',
        typeTerm: 'varchar',
        subtype: 'varchar',
        'default': null,
        extra: false,
        isPrimaryKey: false,
        isAutoIncrement: null,
        isNullable: false,
        isFloat: null,
        isUnsigned: null,
        isForeignKey: false,
        isUnique: false,
        referencesTo: [],
        referencedBy: [],
        optionsList: null,
        maxTextLength: 400,
        database: 'plants_bd',
        archetype: 'varchar(400)'
      }
    }
  },
  constraints: {
    chat_messages: {
      database: 'plants_bd',
      model: 'ChatMessages',
      table: 'chat_messages',
      attributes: [
        'id',
        'id_user',
        'message',
        'created_at'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'chat_messages_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    combo_compound_and_plant: {
      database: 'plants_bd',
      model: 'ComboCompoundAndPlant',
      table: 'combo_compound_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_compound',
        'percentage',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_compound_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_compound_and_plant_ibfk_1',
          column: 'id_compound',
          referencedTable: 'compound',
          referencedColumn: 'id'
        }
      ]
    },
    combo_environment_and_plant: {
      database: 'plants_bd',
      model: 'ComboEnvironmentAndPlant',
      table: 'combo_environment_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_environment',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_environment_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_environment_and_plant_ibfk_1',
          column: 'id_environment',
          referencedTable: 'environment',
          referencedColumn: 'id'
        }
      ]
    },
    combo_group_and_permission: {
      database: 'plants_bd',
      model: 'ComboGroupAndPermission',
      table: 'combo_group_and_permission',
      attributes: [
        'id',
        'id_group',
        'id_permission'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_group_and_permission_ibfk_1',
          column: 'id_group',
          referencedTable: 'groups',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_group_and_permission_ibfk_2',
          column: 'id_permission',
          referencedTable: 'permissions',
          referencedColumn: 'id'
        }
      ],
      rest: {
        limit: 10,
        offset: 1,
        order: 'combo_group_and_permission.id_group asc, combo_group_and_permission.id_permission asc'
      }
    },
    combo_image_and_plant: {
      database: 'plants_bd',
      model: 'ComboImageAndPlant',
      table: 'combo_image_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_image',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_image_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_image_and_plant_ibfk_1',
          column: 'id_image',
          referencedTable: 'image',
          referencedColumn: 'id'
        }
      ]
    },
    combo_image_and_specimen: {
      database: 'plants_bd',
      model: 'ComboImageAndSpecimen',
      table: 'combo_image_and_specimen',
      attributes: [
        'id',
        'id_specimen',
        'id_image',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_image_and_specimen_ibfk_2',
          column: 'id_specimen',
          referencedTable: 'specimen',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_image_and_specimen_ibfk_1',
          column: 'id_image',
          referencedTable: 'image',
          referencedColumn: 'id'
        }
      ]
    },
    combo_localization_and_plant: {
      database: 'plants_bd',
      model: 'ComboLocalizationAndPlant',
      table: 'combo_localization_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_localization',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_localization_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_localization_and_plant_ibfk_1',
          column: 'id_localization',
          referencedTable: 'localization',
          referencedColumn: 'id'
        }
      ]
    },
    combo_trait_and_plant: {
      database: 'plants_bd',
      model: 'ComboTraitAndPlant',
      table: 'combo_trait_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_trait',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_trait_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_trait_and_plant_ibfk_1',
          column: 'id_trait',
          referencedTable: 'trait',
          referencedColumn: 'id'
        }
      ]
    },
    combo_trait_and_specimen: {
      database: 'plants_bd',
      model: 'ComboTraitAndSpecimen',
      table: 'combo_trait_and_specimen',
      attributes: [
        'id',
        'id_specimen',
        'id_trait',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_trait_and_specimen_ibfk_2',
          column: 'id_specimen',
          referencedTable: 'specimen',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_trait_and_specimen_ibfk_1',
          column: 'id_trait',
          referencedTable: 'trait',
          referencedColumn: 'id'
        }
      ]
    },
    combo_usage_and_plant: {
      database: 'plants_bd',
      model: 'ComboUsageAndPlant',
      table: 'combo_usage_and_plant',
      attributes: [
        'id',
        'id_plant',
        'id_usage',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_usage_and_plant_ibfk_2',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_usage_and_plant_ibfk_1',
          column: 'id_usage',
          referencedTable: 'usages',
          referencedColumn: 'id'
        }
      ]
    },
    combo_user_and_group: {
      database: 'plants_bd',
      model: 'ComboUserAndGroup',
      table: 'combo_user_and_group',
      attributes: [
        'id',
        'id_user',
        'id_group'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_user_and_group_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_user_and_group_ibfk_2',
          column: 'id_group',
          referencedTable: 'groups',
          referencedColumn: 'id'
        }
      ]
    },
    combo_user_and_permission: {
      database: 'plants_bd',
      model: 'ComboUserAndPermission',
      table: 'combo_user_and_permission',
      attributes: [
        'id',
        'id_user',
        'id_permission'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'combo_user_and_permission_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        },
        {
          constraint: 'combo_user_and_permission_ibfk_2',
          column: 'id_permission',
          referencedTable: 'permissions',
          referencedColumn: 'id'
        }
      ]
    },
    compound: {
      database: 'plants_bd',
      model: 'Compound',
      table: 'compound',
      attributes: [
        'id',
        'name',
        'referencia',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    configuration: {
      database: 'plants_bd',
      model: 'Configuration',
      table: 'configuration',
      attributes: [
        'id',
        'id_user',
        'aspect',
        'value'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'configuration_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    environment: {
      database: 'plants_bd',
      model: 'Environment',
      table: 'environment',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    example_process: {
      database: 'plants_bd',
      model: 'ExampleProcess',
      table: 'example_process',
      attributes: [
        'id',
        'id_creator',
        'data',
        'meta',
        'transactions',
        'status',
        'created_at'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'example_process_ibfk_1',
          column: 'id_creator',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    example_process_transaction: {
      database: 'plants_bd',
      model: 'ExampleProcessTransaction',
      table: 'example_process_transaction',
      attributes: [
        'id',
        'id_process',
        'id_transactor',
        'operation',
        'description',
        'created_at'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'example_process_transaction_ibfk_1',
          column: 'id_process',
          referencedTable: 'example_process',
          referencedColumn: 'id'
        },
        {
          constraint: 'example_process_transaction_ibfk_2',
          column: 'id_transactor',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    filesystem: {
      database: 'plants_bd',
      model: 'Filesystem',
      table: 'filesystem',
      attributes: [
        'id',
        'nodetype',
        'path',
        'contents',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        tree: {
          pathColumn: 'path',
          pathSeparator: '/',
          typeColumn: 'node_type',
          leafAlias: 'file',
          branchAlias: 'folder'
        }
      }
    },
    groups: {
      database: 'plants_bd',
      model: 'Groups',
      table: 'groups',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        join: [
          [
            'combo_group_and_permission',
            'combo_group_and_permission.id_group',
            '=',
            'groups.id'
          ],
          [
            'permissions',
            'permissions.id',
            '=',
            'combo_group_and_permission.id_permission'
          ]
        ]
      },
      auth: {
        onDelete: {
          require: {
            permissions: [
              'to administrate'
            ],
            groups: [
              'administration'
            ],
            users: [
              'administrator'
            ]
          }
        }
      }
    },
    history_data: {
      database: 'plants_bd',
      model: 'HistoryData',
      table: 'history_data',
      attributes: [
        'id',
        'user_ip',
        'user_agent',
        'user_id',
        'original_table',
        'request_data',
        'data',
        'metadata',
        'description',
        'deleted_at'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    history_event: {
      database: 'plants_bd',
      model: 'HistoryEvent',
      table: 'history_event',
      attributes: [
        'id',
        'user_ip',
        'user_agent',
        'user_id',
        'original_table',
        'event',
        'data',
        'metadata',
        'description',
        'deleted_at'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    image: {
      database: 'plants_bd',
      model: 'Image',
      table: 'image',
      attributes: [
        'id',
        'id_specimen',
        'id_user',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'image_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    localization: {
      database: 'plants_bd',
      model: 'Localization',
      table: 'localization',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    permissions: {
      database: 'plants_bd',
      model: 'Permissions',
      table: 'permissions',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        where: [
          [
            'permissions.name',
            'notlike',
            '%8'
          ]
        ],
        limit: undefined,
        offset: undefined,
        sort: undefined
      }
    },
    plant: {
      database: 'plants_bd',
      model: 'Plant',
      table: 'plant',
      attributes: [
        'id',
        'name',
        'name_scientific',
        'name_popular',
        'description',
        'field_1',
        'field_2',
        'field_3',
        'field_4',
        'field_5'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        join: [
          [
            'plant_details',
            'plant_details.id_plant',
            '=',
            'plant.id'
          ]
        ]
      }
    },
    plant_details: {
      database: 'plants_bd',
      model: 'PlantDetails',
      table: 'plant_details',
      attributes: [
        'id',
        'id_plant',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'plant_details_ibfk_1',
          column: 'id_plant',
          referencedTable: 'plant',
          referencedColumn: 'id'
        }
      ]
    },
    sessions: {
      database: 'plants_bd',
      model: 'Sessions',
      table: 'sessions',
      attributes: [
        'id',
        'id_user',
        'session_token',
        'refresh_token'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'sessions_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    specimen: {
      database: 'plants_bd',
      model: 'Specimen',
      table: 'specimen',
      attributes: [
        'id',
        'id_plant',
        'id_user',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [
        {
          constraint: 'specimen_ibfk_1',
          column: 'id_user',
          referencedTable: 'users',
          referencedColumn: 'id'
        }
      ]
    },
    trait: {
      database: 'plants_bd',
      model: 'Trait',
      table: 'trait',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        join: [
          [
            'trait_details',
            'trait_details.id_trait',
            '=',
            'trait.id'
          ],
          [
            'trait_secret_details',
            'trait_secret_details.id_trait',
            '=',
            'trait.id'
          ]
        ]
      }
    },
    trait_details: {
      database: 'plants_bd',
      model: 'TraitDetails',
      table: 'trait_details',
      attributes: [
        'id',
        'id_trait',
        'details'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    trait_secret_details: {
      database: 'plants_bd',
      model: 'TraitSecretDetails',
      table: 'trait_secret_details',
      attributes: [
        'id',
        'id_trait',
        'details'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      auth: {
        onGet: {
          require: {
            permissions: [
              'to administrate'
            ],
            groups: [
              'administration'
            ],
            users: [
              'administrator'
            ]
          }
        },
        onPost: {
          require: {
            permissions: [
              'to administrate'
            ],
            groups: [
              'administration'
            ],
            users: [
              'administrator'
            ]
          }
        },
        onPut: {
          require: {
            permissions: [
              'to administrate'
            ],
            groups: [
              'administration'
            ],
            users: [
              'administrator'
            ]
          }
        }
      }
    },
    usages: {
      database: 'plants_bd',
      model: 'Usages',
      table: 'usages',
      attributes: [
        'id',
        'name',
        'description'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: []
    },
    users: {
      database: 'plants_bd',
      model: 'Users',
      table: 'users',
      attributes: [
        'id',
        'name',
        'full_name',
        'profile_picture'
      ],
      primaryKeys: [
        'id'
      ],
      foreignKeys: [],
      rest: {
        cascadeDelete: [
          {
            type: 'delete',
            table: 'combo_user_and_permission',
            column: 'id_user'
          },
          {
            type: 'delete',
            table: 'combo_user_and_group',
            column: 'id_user'
          }
        ]
      }
    }
  },
  general: {
    slug: '/api/v1',
    slugForAuth: '/auth/v1',
    debugSql: false,
    debugErrors: true,
    debugSqlRestSplitter: '\n[SQL:REST]',
    debugSqlHistorySplitter: '\n[SQL:HISTORY]',
    debugSqlAuthSplitter: '\n[SQL:AUTH]',
    debugSqlProcessSplitter: '\n[SQL:PROCESS]',
    maxSessionsPerUser: 10,
    hiddenTables: [
      'unconfirmed_users'
    ],
    hiddenColumns: [
      'users.password',
      'users.recovery_token',
      'users.email',
      'users.deactivation'
    ]
  }
}