/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distrubuted in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
'use strict';

/**
 * @name OverviewTagDetailsController
 */
class OverviewTagDetailsController {

    /**
     * @param $report
     * @param $stateParams
     * @param $container
     */
    constructor ($report, $stateParams, $container) {
        this.report = $report;
        this.stateParams = $stateParams;
        this.doNotTrackEnabled = $container.$doNotTrack.isEnabled();
    }

    /**
     * Returns tag details based on routing parameter
     *
     * @returns {TagSummary|Boolean}
     */
    get tagSummary () {

        return this.report
            .stateSummary
            .getTagSummary(this.stateParams.id);

    }

}

OverviewTagDetailsController.$inject = [
    'stg.debugger.report',
    '$stateParams',
    '$container'
];

angular
    .module('stg.debugger')
    .controller('stg.debugger.OverviewTagDetailsController', OverviewTagDetailsController);
