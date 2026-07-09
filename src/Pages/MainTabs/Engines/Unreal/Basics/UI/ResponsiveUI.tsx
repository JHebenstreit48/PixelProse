import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResponsiveUI = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/UI/ResponsiveUI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Responsive UI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResponsiveUI;
