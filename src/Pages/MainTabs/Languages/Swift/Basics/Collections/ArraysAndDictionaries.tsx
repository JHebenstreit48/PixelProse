import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ArraysAndDictionaries = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Collections/ArraysAndDictionaries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Arrays & Dictionaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArraysAndDictionaries;
