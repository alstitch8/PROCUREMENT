SELECT

PO.ORDER_NO as PO_NO,
PO.REQUISITION_NO as PR_NO,
PO.BUYER_CODE AS REQUISITIONER,
PO.MARK_FOR AS ORDERD_FOR,
PO.NAME AS SUPPLIER,
PO.PO_STATUS AS STATUS,
PO.PO_LINE_STATUS AS LINE_STSTUS


FROM IFS_PO_STATUS_VIEW PO