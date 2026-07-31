import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
