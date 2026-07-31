import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DataTypes = () => {
  const markdownFilePath = '/LanguagesPages/CFamily/CNotes/Basics/CDataTypes.md';

  return (
    <>
      <PageLayout>
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