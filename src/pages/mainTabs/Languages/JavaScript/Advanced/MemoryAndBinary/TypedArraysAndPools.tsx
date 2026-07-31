import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypedArraysAndPools = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/MemoryAndBinary/TypedArraysAndPools';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypedArrays & Pools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypedArraysAndPools;
