import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DOMAndWorkersTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/DOMAndWorkers/DOMAndWorkersTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="DOM & Workers Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMAndWorkersTypes;
