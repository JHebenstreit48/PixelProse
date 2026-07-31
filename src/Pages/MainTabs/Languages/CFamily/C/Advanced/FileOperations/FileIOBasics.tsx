import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
