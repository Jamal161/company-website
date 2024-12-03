public bool InsertT13005(T13005Data data, string userCode)
{
    return Command(@"
      INSERT INTO T13005 
      (T_ENTRY_USER, T_ENTRY_DATE, T_SPECIMEN_CODE, T_LANG1_NAME, T_LANG2_NAME, T_ANALYZER_CODE, T_SPECIMEN_IMAGE) 
      VALUES (:T_ENTRY_USER, TRUNC(SYSDATE), :T_SPECIMEN_CODE, :T_LANG1_NAME, :T_LANG2_NAME, :T_ANALYZER_CODE, :T_SPECIMEN_IMAGE)",
        new
        {
            T_ENTRY_USER = userCode,
            data.T_SPECIMEN_CODE,
            data.T_LANG1_NAME,
            data.T_LANG2_NAME,
            data.T_ANALYZER_CODE,
            data.T_SPECIMEN_IMAGE
        });
}