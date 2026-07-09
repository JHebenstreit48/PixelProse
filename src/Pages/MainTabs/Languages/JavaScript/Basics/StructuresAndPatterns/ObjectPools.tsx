import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObjectPools = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/StructuresAndPatterns/ObjectPools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Object Pools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectPools;
