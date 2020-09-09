module.exports = function(cms, router) {
	cms.rest.controllers.chatMessages.create().mountToRouter(router);
	cms.rest.controllers.comboCompoundAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboEnvironmentAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboGroupAndPermission.create().mountToRouter(router);
	cms.rest.controllers.comboImageAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboImageAndSpecimen.create().mountToRouter(router);
	cms.rest.controllers.comboLocalizationAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboTraitAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboTraitAndSpecimen.create().mountToRouter(router);
	cms.rest.controllers.comboUsageAndPlant.create().mountToRouter(router);
	cms.rest.controllers.comboUserAndGroup.create().mountToRouter(router);
	cms.rest.controllers.comboUserAndPermission.create().mountToRouter(router);
	cms.rest.controllers.compound.create().mountToRouter(router);
	cms.rest.controllers.configuration.create().mountToRouter(router);
	cms.rest.controllers.environment.create().mountToRouter(router);
	cms.rest.controllers.exampleProcess.create().mountToRouter(router);
	cms.rest.controllers.exampleProcessTransaction.create().mountToRouter(router);
	cms.rest.controllers.filesystem.create().mountToRouter(router);
	cms.rest.controllers.groups.create().mountToRouter(router);
	cms.rest.controllers.historyData.create().mountToRouter(router);
	cms.rest.controllers.historyEvent.create().mountToRouter(router);
	cms.rest.controllers.image.create().mountToRouter(router);
	cms.rest.controllers.localization.create().mountToRouter(router);
	cms.rest.controllers.permissions.create().mountToRouter(router);
	cms.rest.controllers.plant.create().mountToRouter(router);
	cms.rest.controllers.sessions.create().mountToRouter(router);
	cms.rest.controllers.specimen.create().mountToRouter(router);
	cms.rest.controllers.trait.create().mountToRouter(router);
	cms.rest.controllers.usages.create().mountToRouter(router);
	cms.rest.controllers.users.create().mountToRouter(router);
}