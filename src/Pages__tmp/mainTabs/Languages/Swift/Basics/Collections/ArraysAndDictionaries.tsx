import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ArraysAndDictionaries = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Collections/ArraysAndDictionaries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Arrays & Dictionaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArraysAndDictionaries;
