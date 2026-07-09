import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
