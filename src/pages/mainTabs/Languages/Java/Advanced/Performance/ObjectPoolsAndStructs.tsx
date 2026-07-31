import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ObjectPoolsAndStructs = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Performance/ObjectPoolsAndStructs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Object Pools & Structs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectPoolsAndStructs;
