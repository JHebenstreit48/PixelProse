import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
