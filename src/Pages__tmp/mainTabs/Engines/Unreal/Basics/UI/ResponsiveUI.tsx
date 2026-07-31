import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
