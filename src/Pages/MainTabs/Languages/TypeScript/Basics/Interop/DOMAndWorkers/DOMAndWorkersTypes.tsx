import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DOMAndWorkersTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/DOMAndWorkers/DOMAndWorkersTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DOM & Workers Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMAndWorkersTypes;
