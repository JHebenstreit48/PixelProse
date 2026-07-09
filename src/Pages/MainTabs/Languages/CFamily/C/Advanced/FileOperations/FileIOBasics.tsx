import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileIOBasics = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/FileOperations/FileIOBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="File I/O Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileIOBasics;
