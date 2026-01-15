import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObjectPools = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/StructuresAndPatterns/ObjectPools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Object Pools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectPools;
