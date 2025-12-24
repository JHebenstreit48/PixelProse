import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataTypes = () => {
  const markdownFilePath = '/LanguagesPages/CFamily/CNotes/Basics/CDataTypes.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C Data Types" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default DataTypes;