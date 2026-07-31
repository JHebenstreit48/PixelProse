import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FilesAndPaths = () => {
  const markdownFilePath = 'Languages/Rust/Basics/CollectionsAndIO/FilesAndPaths';

  return (
    <>
      <PageLayout>
        <PageTitle title="Files & Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilesAndPaths;
