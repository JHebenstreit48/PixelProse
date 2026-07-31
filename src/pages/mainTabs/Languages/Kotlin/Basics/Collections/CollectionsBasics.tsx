import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
