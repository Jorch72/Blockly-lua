// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">mylist</span><span id="textVariable">mytext</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Error parsing XML:\\n%1\\n\\nSelect \'OK\' to abandon your changes or \'Cancel\' to further edit the XML.</span><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span><span id="Code_turtleForward">move forward</span><span id="Code_turtleBackward">move backward</span><span id="Code_turtleUp">move up</span><span id="Code_turtleDown">move down</span><span id="Code_turtleMoveTooltip">Try to move the turtle in the specified direction, returning true if successful, false if the way is blocked.</span><span id="Code_turtleRight">turn right</span><span id="Code_turtleLeft">turn left</span><span id="Code_turtleTurnTooltip">Turn 90 degrees in the specified direction.</span><span id="Code_turtleDigUp">dig up</span><span id="Code_turtleDigDown">dig down</span><span id="Code_turtleDigFront">dig in front</span><span id="Code_turtleDigTooltip">Try to dig in the specified direction, returning true if successful, false otherwise (for example, if the block is empty or bedrock is encountered).</span><span id="Code_turtleDetectUp">detect above</span><span id="Code_turtleDetectDown">detect below</span><span id="Code_turtleDetectFront">detect in front</span><span id="Code_turtleDetectTooltip">Detect whether there is a block in the specified direction.  Mobs, liquids, and floating objects are not detected.  The result is true if a block was detected, false otherwise.</span><span id="Code_turtlePlaceUp">place item above</span><span id="Code_turtlePlaceDown">place item below</span><span id="Code_turtlePlaceFront">place item in front</span><span id="Code_turtlePlaceTooltip">Place an item from the selected slot in the specified direction.  The result is true if successful, false if no item was in the slot or it could not be placed.</span><span id="Code_turtlePlaceSignUp">place item above</span><span id="Code_turtlePlaceSignDown">place item below</span><span id="Code_turtlePlaceSignFront">place item in front</span><span id="Code_turtlePlaceSignText">with sign text %1</span><span id="Code_turtlePlaceSignTooltip">Place an item from the selected slot in the specified direction.  If it is a sign, it will have the specified text.  The result is true if an item could be placed, false if no item was in the slot or it could not be placed.</span><span id="Code_terminate">end program with message %1</span><span id="Code_terminateTooltip">End the program with the provided error message.  This should not be used for normal termination.</span><span id="Code_craft">craft</span><span id="Code_craftLimit">with limit</span><span id="Code_craftTooltip">Craft items using ingredient in the turtle\'s inventory, putting results in the currently selected slot.</span><span id="Code_select">select slot #%1</span><span id="Code_selectTooltip">Select the slot to use (1-16) for subsequent craft, drop, etc., commands.</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../lua_compressed.js"><\/script><script type="text/javascript" src="../../msg/js/en.js"><\/script><script type="text/javascript" src="blocks.js"><\/script><script type="text/javascript" src="blocks-turtle.js"><\/script><script type="text/javascript" src="blocks-os.js"><\/script><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="http://code.google.com/p/blockly">Blockly</a> : Code</span></h1></td><td class="farSide"></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="Code.tabClick(this.id)">Blocks</td><td class="tabmin">&nbsp;</td><td id="tab_lua" class="taboff" onclick="Code.tabClick(this.id)">Lua</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff" onclick="Code.tabClick(this.id)">XML</td><td class="tabmax"><button id="trashButton" class="notext" title="Discard all blocks."><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" class="notext" title="Save and link to blocks."><img src=\'../../media/1x1.gif\' class="link icon21"></button> </td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_lua" class="content"></pre><textarea id="content_xml" class="content" wrap="off"></textarea>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="ComputerCraft"><category name="Turtle movement"><block type="turtle_move"></block><block type="turtle_turn"></block></category><category name="Turtle interaction"><block type="turtle_dig"></block><block type="turtle_detect"></block><block type="turtle_select"></block><block type="turtle_place"></block><block type="turtle_place_sign"></block><block type="turtle_craft"></block></category><category name="Operating system"><block type="os_terminate"></block><value name="MSG"><block type="text"></block></value></block><block type="os_sleep"><value name="VALUE"><block type="math_number"><title name="NUM">.8</title></block></value></block></category></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Text"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">mytext</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">mytext</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">mytext</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="Lists"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">mylist</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">mylist</title></block></value></block><block type="lists_add"><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">mylist</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">mylist</title></block></value></block></category><category name="Colour"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Variables" custom="VARIABLE"></category><category name="Procedures" custom="PROCEDURE"></category></xml>';
};


codepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><div id="blockly"></div>';
};
