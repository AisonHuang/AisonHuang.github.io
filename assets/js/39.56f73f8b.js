(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{472:function(s,a,e){"use strict";e.r(a);var n=e(16),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("执行计划可以用来分析SQL的性能 ，先学会看懂执行计划参数")])]),s._v(" "),e("h2",{attrs:{id:"查看执行计划的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看执行计划的方法"}},[s._v("#")]),s._v(" "),e("strong",[s._v("查看执行计划的方法")])]),s._v(" "),e("h3",{attrs:{id:"设置autotrace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置autotrace"}},[s._v("#")]),s._v(" "),e("strong",[s._v("设置autotrace")])]),s._v(" "),e("p",[e("strong",[s._v("AUTOTRACE")]),s._v("是SqlPlus中的一个工具，可以显示所执行查询的解释计划(explain plan)以及所用的资源")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("set autotrace off: 此为默认值，即关闭autotrace\n\nset autotrace on explain: 只显示执行计划\n\nset autotrace on statistics: 只显示执行的统计信息\n\nset autotrace on: 既显示执行计划，又显示执行的统计信息\n\nset autotrace traceonly: 与on相似，但不显示语句的执行结果\n\n示例：\n")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set autotrace on;\nselect 1 from dual;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("注意：如果在执行set autotrace时出现以下错误提示：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("         SP2-0618: Cannot find the Session Identifier.  Check PLUSTRACE role is enabled\n\n         SP2-0611: Error enabling STATISTICS report \n\n         可尝试如下方式解决：\n\n         conn / as sysdba;\n\n         执行@$ORACLE_HOME/RDBMS/ADMIN/utlxplan.sql，或执行一下$ORACLE_HOM\\product\\11.2.0\\dbhome_1\\RDBMS\\ADMIN\\utlxplan.sql文件的内容.\n\n         执行@$ORACLE_HOME/sqlplus/admin/plustrce.sql，或执行一下$ORACLE_HOM\\product\\11.2.0\\dbhome_1\\sqlplus\\admin\\plustrce.sql文件的内容.\n\n         grant plustrace to public;\n")])])]),e("h3",{attrs:{id:"使用sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用sql"}},[s._v("#")]),s._v(" 使用SQL")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("执行：**explain plan for** <sql语句>\n\n查看：`SELECT plan_table_output FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE'));`\n\n         或 `select * from table(dbms_xplan.display);`\n\n\n\n示例：\n\n    `explain plan for select 1 from dual;`\n\n    `select * from table(dbms_xplan.display);`\n")])])]),e("h3",{attrs:{id:"使用pl-sql-developer、toad等工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用pl-sql-developer、toad等工具"}},[s._v("#")]),s._v(" 使用PL/SQL Developer、Toad等工具")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("在PL/SQL Developer中，选中SQL语句，然后点击菜单“工具”-“解释计划”或按快捷键F5即可。\n")])])]),e("h2",{attrs:{id:"执行计划结果信息说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行计划结果信息说明"}},[s._v("#")]),s._v(" "),e("strong",[s._v("执行计划结果信息说明")])]),s._v(" "),e("p",[s._v("上面执行计划示例在运行之后可能会输出如下信息，接下来对这些信息进行进一步说明")]),s._v(" "),e("p",[s._v("PLAN_TABLE_OUTPUT")]),s._v(" "),e("p",[s._v("--------------------------------------------------------------------------------")]),s._v(" "),e("p",[s._v("Plan hash value: 1388734953")]),s._v(" "),e("p",[s._v("--------------------------------------------------------------------------------")]),s._v(" "),e("p",[s._v("| Id  | Operation                | Name | Rows  | Cost (%CPU)| Time     |")]),s._v(" "),e("p",[s._v("--------------------------------------------------------------------------------")]),s._v(" "),e("p",[s._v("|   0 | SELECT STATEMENT |           |     1    |     2   (0)      | 00:00:01 |")]),s._v(" "),e("p",[s._v("|   1 |  FAST DUAL              |           |     1    |     2   (0)      | 00:00:01 |")]),s._v(" "),e("p",[s._v("--------------------------------------------------------------------------------")]),s._v(" "),e("h3",{attrs:{id:"执行计划中字段的说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行计划中字段的说明"}},[s._v("#")]),s._v(" 执行计划中字段的说明")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("**Id: 一个序号，但不是执行的先后顺序。执行的先后根据缩进来判断。**\n\n**Operation: 当前操作的内容。**\n\n**Name: 操作的对象名称**。\n\n**Rows: 当前操作的基数，Oracle估计当前操作的返回结果集。**\n\n**Cost(%CPU): Oracle 计算出来的一个数值（代价），用于说明SQL执行的代价。**\n\n**Time: Oracle估计当前操作的时间**\n")])])]),e("h2",{attrs:{id:"执行计划中内容的说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行计划中内容的说明"}},[s._v("#")]),s._v(" 执行计划中内容的说明")]),s._v(" "),e("p",[e("code",[s._v("table access full:")]),s._v(" 全表扫描，对所有表中记录进行扫描。使用多块读操作，一次I/O能读取多块数据块。表字段不涉及索引时往往采用这种方式。"),e("strong",[s._v("较大的表不建议使用全表扫描，除非结果数据超出全表数据总量的10%")]),s._v("。")]),s._v(" "),e("p",[e("code",[s._v("table access by index rowid:")]),s._v(" 通过ROWID的表存取，一次I/O只能读取一个数据块。"),e("strong",[s._v("通过rowid读取表字段，rowid可能是索引键值上的rowid")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"_4种类型的索引扫描-index-scan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4种类型的索引扫描-index-scan"}},[s._v("#")]),s._v(" 4种类型的索引扫描(index scan)")]),s._v(" "),e("p",[e("code",[s._v("index unique scan:")]),s._v(" 索引唯一扫描，如果表字段有UNIQUE 或PRIMARY KEY 约束，Oracle实现索引唯一扫描，这种扫描方式条件比较极端，出现比较少。")]),s._v(" "),e("p",[e("code",[s._v("index range scan:")]),s._v(" 索引范围扫描，最常见的索引扫描方式。在非唯一索引上都使用索引范围扫描。")]),s._v(" "),e("p",[s._v("1 ） "),e("strong",[s._v("在唯一索引列上使用了以下圈定范围的操作符（> < <> >= <= between等）")])]),s._v(" "),e("p",[s._v("2 ） 在组合索引上，只使用部分列进行查询，导致查询出多行")]),s._v(" "),e("p",[s._v("3 ） 对非唯一索引列上进行的任何查询")]),s._v(" "),e("p",[e("code",[s._v("index full scan:")]),s._v("  索引全扫描，这种情况下，是查询的数据都属于索引字段，"),e("strong",[s._v("一般都含有排序操作")]),s._v("。")]),s._v(" "),e("p",[e("code",[s._v("index fast full scan:")]),s._v(" 索引快速扫描，如果查询的数据都属于索引字段，并且没有进行排序操作，那么是属于这种情况。条件比较极端，出现比较少。")]),s._v(" "),e("h3",{attrs:{id:"表之间的连接方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表之间的连接方式"}},[s._v("#")]),s._v(" 表之间的连接方式")]),s._v(" "),e("p",[e("code",[s._v("nested loops:")]),s._v(" 嵌套循环，该连接过程就是一个2层嵌套循环，所以外层循环的次数越少越好。")]),s._v(" "),e("p",[e("strong",[s._v("如果driving row source（外部表）比较小，并且在inner row source（内部表）上有唯一索引，或有高选择性非唯一索引时，使用这种方法可以得到较好的效率。")])]),s._v(" "),e("p",[e("code",[s._v("hash join:")]),s._v(" 哈希连接，"),e("strong",[s._v("在2个较大的row source之间连接时会取得相对较好的效率")]),s._v("，在一个row source较小时则能取得更好的效率。")]),s._v(" "),e("p",[e("code",[s._v("sort merge join:")]),s._v(" 排序 - 合并连接，该种排序限制较大，出现比较少")]),s._v(" "),e("p",[s._v("内部连接过程：")]),s._v(" "),e("p",[s._v("1） 首先生成表1需要的数据，然后对这些数据按照连接操作关联列进行排序；")]),s._v(" "),e("p",[s._v("2） 随后生成表2需要的数据，然后对这些数据按照与表1对应的连接操作关联列进行排序；")]),s._v(" "),e("p",[s._v("3） 最后两边已排序的行被放在一起执行合并操作，即将2个表按照连接条件连接起来。")]),s._v(" "),e("h3",{attrs:{id:"表连接方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表连接方法"}},[s._v("#")]),s._v(" 表连接方法")]),s._v(" "),e("h4",{attrs:{id:"排序-合并连接-sort-merge-join-smj"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序-合并连接-sort-merge-join-smj"}},[s._v("#")]),s._v(" 排序 - - 合并连接（Sort Merge Join， SMJ）：")]),s._v(" "),e("p",[s._v("a） 对于非等值连接，这种连接方式的效率是比较高的。")]),s._v(" "),e("p",[s._v("b） 如果在关联的列上都有索引，效果更好。")]),s._v(" "),e("p",[s._v("c） 对于将2个较大的row source做连接，该连接方法比NL连接要好一些。")]),s._v(" "),e("p",[s._v("d） 但是如果sort merge返回的row source过大，则又会导致使用过多的rowid在表中查询数据时，数据库性能下降，因为过多的I/O.")]),s._v(" "),e("h4",{attrs:{id:"嵌套循环-nested-loops-nl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌套循环-nested-loops-nl"}},[s._v("#")]),s._v(" 嵌套循环（Nested Loops， NL）：")]),s._v(" "),e("p",[s._v("a） "),e("strong",[s._v("如果driving row source（外部表）比较小，并且在inner row source（内部表）上有唯一索引，或有高选择性非唯一索引时，使用这种方法可以得到较好的效率")]),s._v("。")]),s._v(" "),e("p",[s._v("b） NESTED LOOPS有其它连接方法没有的的一个优点是：可以先返回已经连接的行，而不必等待所有的连接操作处理完才返回数据，这可以实现快速的响应时间。")]),s._v(" "),e("h4",{attrs:{id:"哈希连接-hash-join-hj"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希连接-hash-join-hj"}},[s._v("#")]),s._v(" 哈希连接（Hash Join， HJ）：")]),s._v(" "),e("p",[s._v("a） 这种方法是在oracle7后来引入的，使用了比较先进的连接理论，"),e("strong",[s._v("一般来说，其效率应该好于其它2种连接，但是这种连接只能用在CBO优化器中")]),s._v("，而且需要设置合适的hash_area_size参数，才能取得较好的性能。")]),s._v(" "),e("p",[s._v("b） "),e("strong",[s._v("在2个较大的row source之间连接时会取得相对较好的效率")]),s._v("，在一个row source较小时则能取得更好的效率。")]),s._v(" "),e("p",[s._v("c） 只能用于等值连接中")]),s._v(" "),e("h2",{attrs:{id:"执行计划统计信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行计划统计信息"}},[s._v("#")]),s._v(" 执行计划统计信息")]),s._v(" "),e("h3",{attrs:{id:"统计信息含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计信息含义"}},[s._v("#")]),s._v(" 统计信息含义")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("`recursive calls：` 递归调用次数； \n\n`db block gets :` 当期操作时从内存读取的当前最新块数据，并不是在一致性读的情况的块数，即通过update/delete/select for update读的块数； \n")])])]),e("p",[e("code",[s._v("consistent gets：")]),s._v(" 当期操作时在一致性读状态下读取的块数，即通过不带for update的select 读的块数；")]),s._v(" "),e("p",[e("code",[s._v("physical reads：")]),s._v(" 物理读，Oracle从磁盘读的数据块数量， 其产生的主要原因是：在数据库高速缓存中不存在这些块；全表扫描；磁盘排序。其中逻辑读指的是Oracle从内存读到的数据块数量。一般来说是'consistent gets' + 'db block gets'。当在内存中找不到所需的数据块的话就需要从磁盘中获取，于是就产生了'phsical reads'。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("`redo size：` 执行SQL的过程中产生的重做日志； \n\n`519 bytes sent via SQL*Net to client`： 通过网络发送给客户端的数据 \n\n`524 bytes received via SQL*Net from client：` 通过网络从客户端接收到的数据 \n\n`SQL*Net roundtrips to/from client：`通过网络客户端发送或接收的数量\n\n`sorts (memory)：` 在内存中发生的排序\n\n`sorts (disk)：` 在硬盘中发生的排序\n\n`rows processed：`处理的行数\n")])])]),e("h2",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Plan hash value: 2762319766\n \n----------------------------------------------------------------------------------------------------------------------------\n| Id  | Operation                              | Name                      | Rows  | Bytes |TempSpc| Cost (%CPU)| Time     |\n----------------------------------------------------------------------------------------------------------------------------\n|   0 | SELECT STATEMENT                       |                           |     1 |   165 |       | 40103   (1)| 00:00:02 |\n|   1 |  SORT AGGREGATE                        |                           |     1 |    61 |       |            |          |\n|   2 |   NESTED LOOPS                         |                           |     6 |   366 |       |    17   (0)| 00:00:01 |\n|   3 |    NESTED LOOPS                        |                           |    10 |   366 |       |    17   (0)| 00:00:01 |\n|*  4 |     TABLE ACCESS BY INDEX ROWID BATCHED| HQC_DSCT_ACT_USED         |     5 |   170 |       |     7   (0)| 00:00:01 |\n|*  5 |      INDEX RANGE SCAN                  | IDX_DSCT_ACT_USED_DSCT_NO |     7 |       |       |     3   (0)| 00:00:01 |\n|*  6 |     INDEX RANGE SCAN                   | PID_SALE_VOUCHER_SPLIT    |     2 |       |       |     1   (0)| 00:00:01 |\n|*  7 |    TABLE ACCESS BY INDEX ROWID         | HQC_VOUCHER_SPLIT         |     1 |    27 |       |     2   (0)| 00:00:01 |\n|   8 |  NESTED LOOPS OUTER                    |                           |     1 |   165 |       | 40086   (1)| 00:00:02 |\n|*  9 |   VIEW                                 |                           |     1 |   114 |       | 40084   (1)| 00:00:02 |\n|* 10 |    WINDOW SORT PUSHED RANK             |                           | 19040 |  3811K|  4240K| 40084   (1)| 00:00:02 |\n|  11 |     NESTED LOOPS                       |                           | 19040 |  3811K|       | 39231   (1)| 00:00:02 |\n|  12 |      NESTED LOOPS                      |                           | 19040 |  3811K|       | 39231   (1)| 00:00:02 |\n|* 13 |       HASH JOIN                        |                           | 19040 |  2584K|       |  1143   (1)| 00:00:01 |\n|* 14 |        TABLE ACCESS FULL               | HQC_DSCT_HEADER           |  7095 |   554K|       |   588   (1)| 00:00:01 |\n|* 15 |        TABLE ACCESS FULL               | HQC_DSCT_ACT_USED         | 26097 |  1503K|       |   555   (1)| 00:00:01 |\n|* 16 |       INDEX UNIQUE SCAN                | PK_HQC_CONTRACT           |     1 |       |       |     1   (0)| 00:00:01 |\n|* 17 |      TABLE ACCESS BY INDEX ROWID       | HQC_CONTRACT              |     1 |    66 |       |     2   (0)| 00:00:01 |\n|* 18 |   TABLE ACCESS BY INDEX ROWID BATCHED  | HQC_VOUCHER_SPLIT         |     1 |    51 |       |     2   (0)| 00:00:01 |\n|* 19 |    INDEX RANGE SCAN                    | PID_SALE_VOUCHER_SPLIT    |     2 |       |       |     1   (0)| 00:00:01 |\n----------------------------------------------------------------------------------------------------------------------------\n \nPredicate Information (identified by operation id):\n---------------------------------------------------\n \n"   4 - filter(""H"".""DELETE_FLAG""=\'N\' AND ""H"".""ACTIVE_FLAG""=\'Y\')"\n"   5 - access(""H"".""DSCT_NO""=:B1)"\n"   6 - access(""H"".""DSCT_USED_ID""=""S"".""PARENT_ID"")"\n"   7 - filter(""S"".""SPLIT_RULE""=\'MANUL\' AND ""S"".""PARENT_TYPE""=\'Use\')"\n"   9 - filter(""C"".""ROW_FLG""=1)"\n"  10 - filter(ROW_NUMBER() OVER ( PARTITION BY ""H"".""DSCT_NO"",""T"".""HW_CONTRACT_NO"" ORDER BY "\n"              TO_NUMBER(""H"".""DSCT_HEADER_ID"") DESC )<=1)"\n"  13 - access(""U"".""DSCT_NO""=""H"".""DSCT_NO"")"\n"  14 - filter(""H"".""DSCT_STATUS""=\'Effective\' AND (""H"".""DSCT_SUB_CATEGORY"" IS NULL OR "\n"              (""H"".""DSCT_SUB_CATEGORY""=\'DS_FIXED\' OR ""H"".""DSCT_SUB_CATEGORY""=\'DS_OTHER\')) AND ""H"".""DSCT_TYPE""=\'DS\' AND "\n"              ""H"".""DELETE_FLAG""=\'N\' AND ""H"".""ACTIVE_FLAG""=\'Y\')"\n"  15 - filter(""U"".""USED_STATUS""=\'Published\' AND ""U"".""DELETE_FLAG""=\'N\' AND ""U"".""ACTIVE_FLAG""=\'Y\')"\n"  16 - access(""U"".""PARENT_ID""=""T"".""CONTRACT_ID"")"\n"  17 - filter(""T"".""CONTRACT_STATUS""=\'Published\' AND ""T"".""ACTIVE_FLAG""=\'Y\' AND (""T"".""CONTRACT_SUB_TYPE""=\'PO Under "\n"              Frame Contract\' OR ""T"".""CONTRACT_SUB_TYPE""=\'PO Without Frame Contract\' OR ""T"".""CONTRACT_SUB_TYPE""=\'Standard Sales "\n"              Contract\') AND ""T"".""DELETE_FLAG""=\'N\')"\n"  18 - filter(""S"".""PARENT_TYPE""(+)=\'Use\' AND ""S"".""DELETE_FLAG""(+)=\'N\' AND ""S"".""ACTIVE_FLAG""(+)=\'Y\')"\n"  19 - access(""S"".""PARENT_ID""(+)=""C"".""DSCT_USED_ID"")"\n \nNote\n-----\n   - this is an adaptive plan\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br")])]),e("p",[s._v("按执行顺序解析执行计划")]),s._v(" "),e("p",[e("strong",[s._v('"        5 -      access(""H"".""DSCT_NO""=:B1)"')])]),s._v(" "),e("p",[s._v("扫描索引IDX_DSCT_ACT_USED_DSCT_NO 索引范围扫描，返回结果7条，执行效率快")]),s._v(" "),e("p",[e("strong",[s._v('"     4 -      filter(""H"".""DELETE_FLAG""=\'N\'      AND      ""H"".""ACTIVE_FLAG""=\'Y\')"')])]),s._v(" "),e("p",[s._v("HQC_DSCT_ACT_USED，根据rowid取出数据，执行过滤，运行效率快")]),s._v(" "),e("p",[e("strong",[s._v('"   6 -      access(""H"".""DSCT_USED_ID""=""S"".""PARENT_ID"")"')])]),s._v(" "),e("p",[s._v("根据PID_SALE_VOUCHER_SPLIT 的PARENT_ID过滤DSCT_USED_ID字段，运行效率快")]),s._v(" "),e("p",[e("strong",[s._v('"   7 -      filter(""S"".""SPLIT_RULE""=\'MANUL\'      AND      ""S"".""PARENT_TYPE""=\'Use\')"')])]),s._v(" "),e("p",[s._v("HQC_VOUCHER_SPLIT ，根据rowid取出数据，执行过滤，运行效率快")]),s._v(" "),e("p",[e("strong",[s._v('"  14 -      filter(""H"".""DSCT_STATUS""=\'Effective\'      AND (""H"".""DSCT_SUB_CATEGORY""      IS NULL OR "')])]),s._v(" "),e("p",[e("strong",[s._v('"              (""H"".""DSCT_SUB_CATEGORY""=\'DS_FIXED\' OR ""H"".""DSCT_SUB_CATEGORY""=\'DS_OTHER\')) AND ""H"".""DSCT_TYPE""=\'DS\' AND "')])]),s._v(" "),e("p",[e("strong",[s._v('"              ""H"".""DELETE_FLAG""=\'N\' AND ""H"".""ACTIVE_FLAG""=\'Y\')"')])]),s._v(" "),e("p",[e("strong",[s._v('"  15 - filter(""U"".""USED_STATUS""=\'Published\' AND ""U"".""DELETE_FLAG""=\'N\' AND ""U"".""ACTIVE_FLAG""=\'Y\')"')])]),s._v(" "),e("p",[s._v("table access full使用条件全表扫描,耗时较大")]),s._v(" "),e("p",[e("strong",[s._v('"  13 -      access(""U"".""DSCT_NO""=""H"".""DSCT_NO"")"')])]),s._v(" "),e("p",[s._v("Hash Join 哈希连接表HQC_DSCT_HEADER和 HQC_DSCT_ACT_USED COST的结果  1143 ，耗时较大 COST 1143")]),s._v(" "),e("p",[e("strong",[s._v("Nested Loops")]),s._v("    嵌套循环了Hash链接 COST 39231,耗时大")]),s._v(" "),e("blockquote",[e("p",[s._v("嵌套循环连接在连接小数据子集时很有用，如果有一种访问第二表的有效方法（例如，索引查找）。对于第一个表（外表）中的每一行，Oracle访问第二个表（内部表）中的所有行。把它看成是两个嵌入的循环。在Oracle Database 11g中，对嵌套循环连接的内部实现进行了更改，以减少物理I/O的整体延迟，因此在计划的操作列中可能会看到两个NESTED LOOPS连接，在此之前只在Oracle的早期版本中看到一个。")]),s._v(" "),e("p",[s._v("Oracle数据库会先分配一个Nested Loop连接行源，它用内部表的索引作为内部表，外部表的值作为外部表，用索引和值做第一次连接。而另一个行源使用内部表连接第一个连接的结果，内部表的索引中有行ID。")])]),s._v(" "),e("p",[s._v("因为每次建立第一个Nested Loop 内部表时，都需要table access full表HQC_DSCT_HEADER找到行源DSCT_NO，之后table access full表HQC_DSCT_ACT_USED 找到行源DSCT_NO，2个行源匹配，之后取出符合条件的ROWID")]),s._v(" "),e("p",[e("strong",[s._v('"  16 -      access(""U"".""PARENT_ID""=""T"".""CONTRACT_ID"")"')])]),s._v(" "),e("p",[s._v("唯一索引扫描 PK_HQC_CONTRACT     ，效率快")])])}),[],!1,null,null,null);a.default=t.exports}}]);