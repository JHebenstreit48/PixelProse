import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
