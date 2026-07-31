import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CollectionsBasics = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Collections/CollectionsBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Collections Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CollectionsBasics;
