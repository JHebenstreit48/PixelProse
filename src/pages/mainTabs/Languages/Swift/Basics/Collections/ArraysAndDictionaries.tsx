import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
